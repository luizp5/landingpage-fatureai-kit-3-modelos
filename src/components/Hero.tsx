import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/facebookPixel";
import { appConfig } from "@/config/app";

const Hero = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre os planos da ${appConfig.company_name}.`);
    window.open(`https://wa.me/${appConfig.support_whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo/Company Name */}
        <div className="mb-8">
          {/* Logo dinâmica */}
          <div className="mb-4">
            <img 
              src={appConfig.logo_url} 
              alt={appConfig.company_name}
              className="h-16 md:h-20 mx-auto object-contain"
              onError={(e) => {
                // Fallback para texto se a imagem não carregar
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <h1 
              className="text-4xl md:text-6xl font-bold text-white mb-2 hidden"
              style={{ display: 'none' }}
            >
              {appConfig.company_name}
            </h1>
          </div>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
          A ferramenta completa para
          <span className="block bg-white text-primary px-6 py-3 rounded-2xl inline-block mt-3 shadow-xl">
            controlar suas finanças
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Gerencie receitas e despesas pelo App ou WhatsApp e alcance a liberdade 
          financeira que você sempre sonhou.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button
            variant="hero-primary"
            size="lg"
            className="w-full sm:w-auto text-base font-semibold px-10 py-6 h-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            onClick={() => {
              trackEvent("Lead", { source: "hero_whatsapp" });
              handleWhatsAppClick();
            }}
          >
            Falar no WhatsApp
          </Button>
          <Button
            variant="hero-secondary"
            size="lg"
            className="w-full sm:w-auto text-base font-semibold px-10 py-6 h-auto rounded-xl transition-all duration-300 hover:scale-[1.02]"
            onClick={scrollToPlans}
          >
            Ver Planos
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-sm">Seguro e confiável</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-sm">Suporte 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-sm">Sem fidelidade</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white/60 text-sm">
          <button 
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
          >
            <span></span>
            <span>WhatsApp: {appConfig.support_phone}</span>
          </button>
          <button 
            onClick={() => window.open(`mailto:${appConfig.support_email}`, '_blank')}
            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
          >
            <span></span>
            <span>{appConfig.support_email}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
