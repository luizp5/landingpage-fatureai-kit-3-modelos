import { useState } from "react";
import { X } from "lucide-react";
import { appConfig } from "@/config/app";
import { shouldShowConsent, recordConsent } from "@/lib/consent";

// TEMPLATE2 - White/Clean (Branco + Laranja/Âmbar)
const CookieConsentTemplate2 = () => {
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
      {/* TEMPLATE2 STYLE: Fundo BRANCO puro + borda laranja grossa */}
      <div className="bg-white border-t-4 border-orange-500 py-3 px-4 shadow-[0_-8px_30px_rgba(249,115,22,0.2)]">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Content */}
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-gray-700 text-sm">
                <span className="font-bold text-gray-900">Privacidade:</span> Usamos cookies. Ao continuar navegando, você concorda com nossa{' '}
                <a href="/privacidade" className="text-orange-600 hover:text-orange-700 underline font-semibold">
                  Política de Privacidade
                </a>.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleReject}
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-md hover:shadow-lg"
              >
                Aceitar
              </button>
              <button
                onClick={handleClose}
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
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

export default CookieConsentTemplate2;
