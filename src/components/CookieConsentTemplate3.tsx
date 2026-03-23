import { useState } from "react";
import { X } from "lucide-react";
import { appConfig } from "@/config/app";
import { shouldShowConsent, recordConsent } from "@/lib/consent";

// TEMPLATE3 - Dark Premium Neon (Dark + Ciano/Roxo)
const CookieConsentTemplate3 = () => {
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
      {/* TEMPLATE3 STYLE: Fundo DARK + borda ciano neon + sombras neon */}
      <div className="bg-[#0a0a0f] border-t border-cyan-500/50 py-3 px-4 shadow-[0_-8px_30px_rgba(0,217,255,0.15)]">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Content */}
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-gray-300 text-sm">
                <span className="font-bold text-white">Privacidade:</span> Usamos cookies. Continue navegando e concorda com nossa{' '}
                <a href="/privacidade" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">
                  Política
                </a>.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleReject}
                className="px-3 py-1.5 text-sm text-gray-400 hover:text-white font-medium hover:bg-white/5 rounded-lg transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg shadow-cyan-500/30"
              >
                Aceitar
              </button>
              <button
                onClick={handleClose}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
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

export default CookieConsentTemplate3;
