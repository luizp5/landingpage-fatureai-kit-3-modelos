import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initFacebookPixel, trackPageView } from "@/lib/facebookPixel";
import { onConsentChange } from "@/lib/consent";

const FacebookPixel = () => {
  const location = useLocation();

  useEffect(() => {
    initFacebookPixel();
    const unsubscribe = onConsentChange(() => {
      initFacebookPixel();
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    trackPageView();
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default FacebookPixel;
