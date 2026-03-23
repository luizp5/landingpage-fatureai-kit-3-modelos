import { useEffect } from "react";
import { hasAnalyticsConsent } from "@/lib/consent";

function injectGtm(id: string) {
  if (!id) return;
  if (document.getElementById("gtm-script")) return;
  const s = document.createElement("script");
  s.id = "gtm-script";
  s.async = true;
  s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${id}');`;
  document.head.appendChild(s);
}

const GTM = () => {
  useEffect(() => {
    const id = String(import.meta.env.GTM_ID || "").trim();
    const env = String(import.meta.env.NODE_ENV || "development");
    const isProd = env === "production" || import.meta.env.PROD;
    const enableDev = String(import.meta.env.GTM_ENABLE_DEV || "false").toLowerCase() === "true";
    if ((isProd || enableDev) && hasAnalyticsConsent()) {
      injectGtm(id);
    }
  }, []);
  return null;
};

export default GTM;
