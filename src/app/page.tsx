/* import {  Metadata } from "next";
export const metadata: Metadata = {
  title: "Xprive.com",
  description: "Best luxury shop where items are made in  hell",
  keywords: "Luxury xprive xeron e-commerse-Website expensive",
}; */
"use client";
import ProductList from "@/components/homepage/bestSellingProduct/ProductList";
import Category from "@/components/homepage/category/Category";
import Feature from "@/components/homepage/feature/Feature";
import Leftfirst from "@/components/homepage/first/Leftfirst";
import Rightfirst from "@/components/homepage/first/Rightfirst";
import Musicbanner from "@/components/homepage/Musicbanner";
import Ourproduct from "@/components/homepage/product/Ourproduct";
import SeCarousel from "@/components/homepage/second/SeCarousel";
import Options from "@/components/homepage/subfooter/Options";


import { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser } from "./action";
import { MdNotificationAdd } from "react-icons/md";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  );
/*   const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false); */
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function handleSubscription() {
   /*  setIsLoading(true);
    setError(null); */
    try {
      if (subscription) {
        await subscription.unsubscribe();
        await unsubscribeUser(subscription.endpoint);
        setSubscription(null);
        setIsActive(false)
      } else {
        const registration = await navigator.serviceWorker.ready;
        const newSubscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
          ),
        });
        const serializedSub = {
          endpoint: newSubscription.endpoint,
          expirationTime: newSubscription.expirationTime,
          keys: {
            p256dh: btoa(
              String.fromCharCode(
                ...new Uint8Array(newSubscription.getKey("p256dh")!)
              )
            ),

            auth: btoa(
              String.fromCharCode(
                ...new Uint8Array(newSubscription.getKey("auth")!)
              )
            ),
          },
        };
        await subscribeUser(serializedSub);
        setSubscription(newSubscription);
        setIsActive(true)
      }
    } catch (err) {
      console.error('Subscription error:', err)
     /*  setError('Failed to update subscription') */
    }/* finally {
      setIsLoading(false)
    } */
  }

 /*  async function handleSendNotification() {
    if (!message.trim()) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      await sendNotificationToAll(message)
      setMessage('')
    } catch (err) {
      console.error('Notification error:', err)
      setError('Failed to send notification')
    } finally {
      setIsLoading(false)
    }
  }
 */
  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  if (!isSupported) {
    return <p className="text-red-500">Push notifications are not supported in this browser.</p>
  }

  return (
    <div className="relative">
      <MdNotificationAdd onClick={handleSubscription} className={`sm:w-7 sm:h-7 text-white bg-black absolute rounded-full -top-5 sm:-top-10 right-0 z-10 ${isActive?"bg-yellow-500":""}`} />
      
    </div>
  )
  }
/* 
{isActive && <div className="p-4 absolute border rounded-lg max-w-md mx-auto z-20 bg-white right-0">
      <h3 className="text-lg font-bold mb-4">Push Notifications</h3>
      
      {error && <p className="text-red-500 mb-2">{error}</p>}
      
      {subscription ? (
        <>
          <p className="mb-2">You are subscribed to push notifications.</p>
          <div className="space-y-2">
            <button
              onClick={handleSubscription}
              disabled={isLoading}
              className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Unsubscribe'}
            </button>
            
            <input
              type="text"
              placeholder="Enter notification message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded"
              disabled={isLoading}
            />
            
            <button
              onClick={handleSendNotification}
              disabled={isLoading || !message.trim()}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Send Test Notification'}
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="mb-2">You are not subscribed to push notifications.</p>
          <button
            onClick={handleSubscription}
            disabled={isLoading}
            className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </>
      )}
    </div>}
*/
  interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
      outcome: 'accepted' | 'dismissed';
      platform: string;
    }>;
    prompt(): Promise<void>;
  }
function InstallPrompt() {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent |  null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isInStandaloneMode = () => {
      // For most browsers
      if (window.matchMedia('(display-mode: standalone)').matches) {
        return true;
      }
      
      // For iOS Safari
      if ('standalone' in window.navigator) {
        return (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
      }
      
      return false;
    };
    setIsStandalone(isInStandaloneMode());

    // Improved iOS detection
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /safari/.test(userAgent);
    const isChrome = /crios/.test(userAgent);
    const isFirefox = /fxios/.test(userAgent);
    
    setIsIOS(isIOSDevice && (isSafari || isChrome || isFirefox));

    // Handle beforeinstallprompt event
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };
    
    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // For iOS, we can only show instructions
      if (isIOS) {
        alert('To install this app, tap the share icon and then "Add to Home Screen".');
      }
      return;
    }

    // Show the install prompt for Android/other browsers
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  // Don't show if already installed or if not visible
  if (isStandalone || !isVisible) {
    return null;
  }

  return (
    <div className="fixed z-50 bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-xs">
      <h3 className="font-bold mb-2">Install App</h3>
      <p className="text-sm mb-3">Get the best experience by installing our app!</p>
      <button
        onClick={handleInstallClick}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Install Now
      </button>
      {isIOS && (
        <p className="mt-2 text-xs text-gray-600">
          For iOS, tap <span className="font-bold">Share</span> then <span className="font-bold">Add to Home Screen</span>
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-14 md:space-y-35">
      <div>
        <PushNotificationManager />
        <InstallPrompt />
      </div>
      <div className="flex h-fit  ">
        <div className="hidden lg:flex  justify-center items-center border-r-2 xl:pr-4">
          <Leftfirst />
        </div>
        <div className="w-full">
          <Rightfirst />
        </div>
      </div>
      <SeCarousel />
      <Category />
      <ProductList />
      <Musicbanner />
      <Ourproduct />
      <Feature />
      <Options />
    </div>
  );
}
