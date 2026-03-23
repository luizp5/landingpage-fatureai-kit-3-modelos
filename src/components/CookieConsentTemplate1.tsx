import { useState } from "react";
import { X } from "lucide-react";
import { appConfig } from "@/config/app";
import { shouldShowConsent, recordConsent } from "@/lib/consent";

// TEMPLATE1 - Bold Financial Drama (Dark + Laranja/Vermelho)
const CookieConsentTemplate1 = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useState(() => {
    if (shouldShowConsent()) {
      setOpen(true);
      setTimeout(() => setIsVisible(true), 100);
    }
    const onOpen = () => {
      setOpen(true);
      setTimeout(() => setIsVisible(true), 100);
    };
    window.addEventListener("open-cookie-consent", onOpen);
    return () => window.removeEventListener("open-cookie-consent", onOpen);
  }, []);

  const handleAccept = () => {
    recordConsent({ accepted: true, marketing: true, analytics: true });
    setIsVisible(false);
    setTimeout(() => setOpen(false), 300);
  };

  const handleReject = () => {
    recordConsent({ accepted: false, marketing: false, analytics: false });
    setIsVisible(false);
    setTimeout(() => setOpen(false), 300);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setOpen(false), 300);
  };

  if (!open) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      {/* TEMPLATE1 STYLE: Fundo gradiente laranja/vermelho DRAMÁTICO */}
      <div className="bg-gradient-to-r from-[#FF4D00] via-[#FF6B35] to-[#FF4D00] py-3 px-4 shadow-2xl">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Content */}
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">
                <span className="font-black">Privacidade:</span> Usamos cookies. Continue navegando e concorda com nossa{' '}
                <a href="/privacidade" className="underline font-black hover:text-white/80">
                  Política
                </a>.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleReject}
                className="px-3 py-1.5 text-sm text-white/70 hover:text-white font-semibold hover:bg-white/20 rounded-lg transition-all"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 bg-white text-[#FF4D00] text-sm font-black rounded-lg hover:bg-white/90 transition-all shadow-lg animate-pulse-glow"
              >
                Aceitar
              </button>
              <button
                onClick={handleClose}
                className="p-1.5 text-white/60 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentTemplate1;
