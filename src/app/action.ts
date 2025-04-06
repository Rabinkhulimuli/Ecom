'use server'
 
import { db } from '@/lib/db';
import { toPrismaExpiration } from '@/lib/push-util';
import webpush from 'web-push'

type PushSubscriptionPayload = {
  endpoint: string;
  expirationTime: number | null;
  keys: {
    p256dh: string;
    auth: string;
  };
};
webpush.setVapidDetails(
  'mailto:webdev.rabin@gmail.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
)
 

export async function subscribeUser(sub: PushSubscriptionPayload) {
  try {
    // Validate subscription payload
    if (!sub.endpoint || !sub.keys || !sub.keys.p256dh || !sub.keys.auth) {
      throw new Error('Invalid subscription format')
    }
    const expirationTime = toPrismaExpiration(sub.expirationTime)
    // Check for existing subscription
    const existing = await db.pushSubscription.findUnique({
      where: { endpoint: sub.endpoint }
    })

    if (existing) {
      await db.pushSubscription.update({
        where: { endpoint: sub.endpoint },
        data: {
          keys: sub.keys,
          expirationTime:expirationTime !== null ? { set: expirationTime } : { set: null },
          updatedAt: new Date()
        }
      })
    } else {
      await db.pushSubscription.create({
        data: {
          endpoint: sub.endpoint,
          keys: sub.keys,
          expirationTime: expirationTime
        }
      })
    }

    // Send welcome notification
    await webpush.sendNotification(
      sub,
      JSON.stringify({
        title: 'Subscription Successful',
        body: 'You will now receive notifications from us',
        icon: '/icons/company-main.png'
      })
    ).catch(err => {
      console.error('Welcome notification failed:', err)
      // Don't fail subscription if notification fails
    })

    return { success: true }
  } catch (error) {
    console.error('Subscription error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Subscription failed' 
    }
  }
}


  export async function unsubscribeUser(endpoint: string) {
    try {
      await db.pushSubscription.delete({
        where: { endpoint }
      })
      return { success: true }
    } catch (error) {
      console.error('Unsubscription error:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unsubscription failed' 
      }
    }
  }

 
  export async function sendNotificationToAll(message: string) {
    try {
      const subscriptions = await db.pushSubscription.findMany();
      
      const results = await Promise.allSettled(
        subscriptions.map(sub => {
          const pushSubscription: webpush.PushSubscription = {
            endpoint: sub.endpoint,
            keys: sub.keys as { p256dh: string; auth: string },
            expirationTime: sub.expirationTime ? sub.expirationTime.getTime() : undefined
          };
  
          return webpush.sendNotification(
            pushSubscription,
            JSON.stringify({
              title: 'New Notification',
              body: message,
              icon: '/icons/com-logo.png'
            })
          );
        })
      );
  
  
      // Clean up failed subscriptions
      const failedEndpoints = results
        .filter((result) => result.status === 'rejected')
        .map((_, index) => subscriptions[index].endpoint)
  
      if (failedEndpoints.length > 0) {
        await db.pushSubscription.deleteMany({
          where: { endpoint: { in: failedEndpoints } }
        })
      }
  
      return { 
        success: true, 
        sent: results.filter(r => r.status === 'fulfilled').length,
        failed: failedEndpoints.length
      }
    } catch (error) {
      console.error('Notification broadcast error:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Notification failed' 
      }
    }
  }