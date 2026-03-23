const CONSENT_KEYS = [
  "cookie_consent_marketing",
  "cookie_consent",
  "cookie_consent_analytics",
  "marketing_consent",
  "analytics_consent",
];

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function hasMarketingConsent(): boolean {
  try {
    for (const key of CONSENT_KEYS) {
      const v = localStorage.getItem(key);
      if (v) {
        const n = normalize(v);
        if (n === "true" || n === "1" || n === "yes" || n === "accepted") {
          return true;
        }
      }
    }
  } catch {}

  try {
    const cookie = document.cookie || "";
    for (const key of CONSENT_KEYS) {
      const m = cookie.match(new RegExp(`${key}=([^;]+)`));
      if (m) {
        const n = normalize(decodeURIComponent(m[1]));
        if (n === "true" || n === "1" || n === "yes" || n === "accepted") {
          return true;
        }
      }
    }
  } catch {}

  return false;
}

export function hasAnalyticsConsent(): boolean {
  try {
    const v = localStorage.getItem("cookie_consent_analytics");
    if (v) {
      const n = normalize(v);
      if (n === "true" || n === "1" || n === "yes" || n === "accepted") return true;
    }
  } catch {}
  try {
    const cookie = document.cookie || "";
    const m = cookie.match(new RegExp(`cookie_consent_analytics=([^;]+)`));
    if (m) {
      const n = normalize(decodeURIComponent(m[1]));
      if (n === "true" || n === "1" || n === "yes" || n === "accepted") return true;
    }
  } catch {}
  return false;
}

export function onConsentChange(callback: () => void) {
  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener("cookie-consent-updated", handler as EventListener);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("cookie-consent-updated", handler as EventListener);
  };
}

function setCookie(name: string, value: string, maxAgeDays = 365) {
  const maxAgeSeconds = maxAgeDays * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}`;
}

function getNowISO() {
  return new Date().toISOString();
}

export type ConsentDecision = {
  accepted: boolean;
  marketing: boolean;
  analytics: boolean;
};

export function recordConsent(decision: ConsentDecision, maxAgeDays = 365) {
  try {
    localStorage.setItem("cookie_consent", decision.accepted ? "accepted" : "rejected");
    localStorage.setItem("cookie_consent_marketing", String(decision.marketing));
    localStorage.setItem("cookie_consent_analytics", String(decision.analytics));
    localStorage.setItem("cookie_consent_date", getNowISO());
    setCookie("cookie_consent", decision.accepted ? "accepted" : "rejected", maxAgeDays);
    setCookie("cookie_consent_marketing", String(decision.marketing), maxAgeDays);
    setCookie("cookie_consent_analytics", String(decision.analytics), maxAgeDays);

    const entry = {
      timestamp: getNowISO(),
      accepted: decision.accepted,
      marketing: decision.marketing,
      analytics: decision.analytics,
      policyVersion: "v1",
    };
    const logRaw = localStorage.getItem("cookie_consent_audit_log");
    const log = logRaw ? JSON.parse(logRaw) : [];
    log.push(entry);
    localStorage.setItem("cookie_consent_audit_log", JSON.stringify(log));
    window.dispatchEvent(new Event("cookie-consent-updated"));
  } catch {}
}

export function revokeConsent() {
  try {
    localStorage.removeItem("cookie_consent");
    localStorage.removeItem("cookie_consent_marketing");
    localStorage.removeItem("cookie_consent_analytics");
    localStorage.setItem("cookie_consent_revoked_at", getNowISO());
    // Set cookies to expired
    document.cookie = "cookie_consent=; path=/; max-age=0";
    document.cookie = "cookie_consent_marketing=; path=/; max-age=0";
    document.cookie = "cookie_consent_analytics=; path=/; max-age=0";
    window.dispatchEvent(new Event("cookie-consent-updated"));
  } catch {}
}

export function getAuditLog(): Array<{
  timestamp: string;
  accepted: boolean;
  marketing: boolean;
  analytics: boolean;
  policyVersion: string;
}> {
  try {
    const raw = localStorage.getItem("cookie_consent_audit_log");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function shouldShowConsent(): boolean {
  try {
    const status = localStorage.getItem("cookie_consent");
    return !status; // show if not decided yet
  } catch {
    return true;
  }
}
