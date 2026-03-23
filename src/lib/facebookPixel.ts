declare global {
  interface Window {
    fbq?: {
      callMethod?: (...args: any[]) => void;
      queue?: any[];
      push?: (...args: any[]) => void;
      loaded?: boolean;
      version?: string;
    } & ((...args: any[]) => void);
    _fbq?: any;
  }
}

import { hasMarketingConsent } from "./consent";

let initialized = false;

function parseBool(v: any, def = true) {
  if (v === undefined || v === null || v === "") return def;
  const s = String(v).trim().toLowerCase();
  return s === "true" || s === "1" || s === "yes" || s === "y";
}

function injectFacebookPixelScript() {
  const w = window as any;
  if (w.fbq) return;
  const n: any = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!w._fbq) w._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  w.fbq = n;
  const t = document.createElement("script");
  t.async = true;
  t.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(t);
}

export function initFacebookPixel() {
  if (initialized) return true;
  const isProd = import.meta.env.PROD;
  const enableDev = parseBool(import.meta.env.VITE_PIXEL_FACEBOOK_ENABLE_DEV, false);
  const pixelId = String(import.meta.env.VITE_PIXEL_FACEBOOK || "").trim();
  const requireConsent = parseBool(import.meta.env.VITE_PIXEL_FACEBOOK_REQUIRE_CONSENT, true);
  if (!isProd && !enableDev) return false;
  if (!pixelId) return false;
  if (requireConsent && !hasMarketingConsent()) return false;
  injectFacebookPixelScript();
  if (typeof window.fbq === "function") {
    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
    initialized = true;
    return true;
  }
  return false;
}

export function trackPageView() {
  if (typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window.fbq === "function") {
    window.fbq("track", eventName, params || {});
  }
}

export function isPixelInitialized() {
  return initialized;
}
