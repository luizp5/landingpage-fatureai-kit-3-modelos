import { appConfig } from "@/config/app";
import CookieConsentTemplate1 from "./CookieConsentTemplate1";
import CookieConsentTemplate2 from "./CookieConsentTemplate2";
import CookieConsentTemplate3 from "./CookieConsentTemplate3";

// Seletor de CookieConsent baseado no template
const CookieConsent = () => {
  const { template_variant } = appConfig;
  const variant = template_variant?.toLowerCase() || 'template1';

  switch (variant) {
    case 'template2':
      return <CookieConsentTemplate2 />;
    case 'template3':
      return <CookieConsentTemplate3 />;
    default:
      return <CookieConsentTemplate1 />;
  }
};

export default CookieConsent;
