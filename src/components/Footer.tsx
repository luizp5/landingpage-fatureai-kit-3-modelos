import { appConfig } from "@/config/app";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre os planos da ${appConfig.company_name}.`);
    window.open(`https://wa.me/${appConfig.support_whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${appConfig.support_email}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${appConfig.support_phone}`, '_blank');
  };

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-5 tracking-tight">{appConfig.company_name}</h3>
            <p className="text-background/80 leading-relaxed mb-6 text-[15px]">
              A ferramenta completa para controlar suas finanças e alcançar a liberdade 
              financeira que você sempre sonhou.
            </p>
            <div className="text-background/60 text-sm">
              © {new Date().getFullYear()} {appConfig.company_name}. Todos os direitos reservados.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 tracking-tight">Links Úteis</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#plans"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-background/80 hover:text-background transition-colors duration-200 cursor-pointer text-[15px] inline-block"
                >
                  Planos e Preços
                </a>
              </li>
              <li>
                <a
                  href="/termos"
                  className="text-background/80 hover:text-background transition-colors duration-200 text-[15px] inline-block"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="/privacidade"
                  className="text-background/80 hover:text-background transition-colors duration-200 text-[15px] inline-block"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-5 tracking-tight">Suporte</h4>
            <ul className="space-y-4 text-background/80 text-[15px]">
              <li>
                <button 
                  onClick={handlePhoneClick}
                  className="hover:text-background transition-colors duration-200 cursor-pointer inline-block"
                >
                  📞 {appConfig.support_phone}
                </button>
              </li>
              <li>
                <button 
                  onClick={handleWhatsAppClick}
                  className="hover:text-background transition-colors duration-200 cursor-pointer inline-block"
                >
                  💬 WhatsApp: {appConfig.support_phone}
                </button>
              </li>
              <li>
                <button
                  onClick={handleEmailClick}
                  className="hover:text-background transition-colors duration-200 cursor-pointer inline-block"
                >
                  ✉️ {appConfig.support_email}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-16 pt-8 text-center">
          <p className="text-background/60 text-sm">
            Desenvolvido com ❤️ para ajudar você a alcançar seus objetivos financeiros
          </p>
          <div className="mt-3">
            <button
              className="text-background/80 hover:text-background underline text-sm"
              onClick={() => window.dispatchEvent(new Event("open-cookie-consent"))}
            >
              Preferências de Privacidade
            </button>
            <span className="mx-2">•</span>
            <a href="/auditoria-consentimento" className="text-background/80 hover:text-background underline text-sm">
              Relatório de Auditoria
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
