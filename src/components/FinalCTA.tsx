import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app";

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre os planos da ${appConfig.company_name}.`);
    window.open(`https://wa.me/${appConfig.support_whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
          Pronto para transformar 
          <span className="block mt-2">suas finanças?</span>
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Junte-se a milhares de pessoas que já descobriram o segredo da 
          organização financeira. Comece hoje mesmo!
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
          <Button
            variant="hero-primary"
            size="lg"
            className="w-full sm:w-auto text-base font-semibold px-12 py-6 h-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            onClick={scrollToPlans}
          >
            Começar agora
          </Button>
          <Button
            variant="hero-secondary"
            size="lg"
            className="w-full sm:w-auto text-base font-semibold px-12 py-6 h-auto rounded-xl transition-all duration-300 hover:scale-[1.02]"
            onClick={handleWhatsAppClick}
          >
            Falar com suporte
          </Button>
        </div>

        {/* Additional benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-white/80">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">7 dias</div>
            <p className="text-sm">Teste grátis</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <p className="text-sm">Suporte disponível</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <p className="text-sm">Satisfação garantida</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;