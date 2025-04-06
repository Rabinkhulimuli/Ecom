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
import { subscribeUser, unsubscribeUser, sendNotification } from "./action";
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
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function handleSubscription() {
    setIsLoading(true);
    setError(null);
    try {
      if (subscription) {
        await subscription.unsubscribe();
        await unsubscribeUser();
        setSubscription(null);
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
      }
    } catch (err) {
      console.error('Subscription error:', err)
      setError('Failed to update subscription')
    }finally {
      setIsLoading(false)
    }
  }

  async function handleSendNotification() {
    if (!message.trim()) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      await sendNotification(message)
      setMessage('')
    } catch (err) {
      console.error('Notification error:', err)
      setError('Failed to send notification')
    } finally {
      setIsLoading(false)
    }
  }

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
      <MdNotificationAdd onClick={()=> setIsActive(!isActive)} className="sm:w-7 sm:h-7 text-white bg-black absolute rounded-full -top-5 sm:-top-10 right-0 z-10 "/>
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
    </div>
  )
  }



function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null)
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        typeof (window as typeof window & { MSStream?: unknown }).MSStream ===
          "undefined"
    );

    setIsStandalone(
      window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as Navigator & { standalone?: boolean })
          .standalone === true
    ); // iOS Safari specific
    const handleBeforeInstallPrompt=(e:Event)=> {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsVisible(true)
    }
    window.addEventListener("beforeinstallprompt",handleBeforeInstallPrompt)
    return ()=> {
      window.removeEventListener("beforeinstallprompt",handleBeforeInstallPrompt)
    }
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    const promptEvent = deferredPrompt as unknown as { prompt: () => Promise<{ outcome: string }> };
    await promptEvent.prompt();
    const { outcome } = await promptEvent.prompt();
    
    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
    
    setDeferredPrompt(null);
    setIsVisible(false);
  };
  if (isStandalone || isVisible  ) {
    return null; // Don't show install button if already installed
  }

  return (
    <div className="fixed z-5 bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border">
      <h3 className="font-bold mb-2">Install App</h3>
      <button 
        onClick={handleInstallClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Install Now
      </button>
      {isIOS && (
        <p className="mt-2 text-sm">
          For iOS, tap the share button and then &quot;Add to Home Screen&quot;
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
