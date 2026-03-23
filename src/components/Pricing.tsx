import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/facebookPixel";
import { appConfig } from "@/config/app";

const Pricing = () => {
  const handlePlanClick = (planType: 'monthly' | 'annual') => {
    const planUrl = planType === 'monthly' ? appConfig.monthly_plan_url : appConfig.annual_plan_url;

    // Se tiver URL de pagamento configurada, usa ela
    if (planUrl && planUrl.trim() !== '') {
      window.open(planUrl, '_blank');
    } else {
      // Caso contrário, usa WhatsApp como fallback
      const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planType === 'monthly' ? 'Mensal' : 'Anual'} da ${appConfig.company_name}.`);
      window.open(`https://wa.me/${appConfig.support_whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
    }
  };

  return (
    <section id="plans" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comece hoje mesmo a transformar sua vida financeira
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <div className="bg-card rounded-3xl p-10 shadow-lg border border-border/40 hover:shadow-xl transition-all duration-300 hover:border-primary/30">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-card-foreground mb-3 tracking-tight">Plano Mensal</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold text-primary tracking-tight">R$ {appConfig.plan_price_monthly}</span>
                <span className="text-muted-foreground text-lg">/mês</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {appConfig.plan_features_monthly.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-card-foreground leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full font-semibold text-base h-12 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              size="lg"
              onClick={() => {
                trackEvent("InitiateCheckout", { planType: "monthly" });
                handlePlanClick('monthly');
              }}
            >
              Começar Plano Mensal
            </Button>
          </div>

          {/* Annual Plan - Recommended */}
          <div className="relative bg-card rounded-3xl p-10 shadow-xl border-2 border-primary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Recommended Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                <Star className="w-4 h-4" fill="currentColor" />
                Mais vantajoso
              </div>
            </div>

            <div className="text-center mb-10 pt-6">
              <h3 className="text-2xl font-bold text-card-foreground mb-3 tracking-tight">Plano Anual</h3>
              <div className="mb-3">
                <span className="text-5xl font-bold text-primary tracking-tight">R$ {appConfig.plan_price_annual}</span>
                <span className="text-muted-foreground text-lg">/ano</span>
              </div>
              <p className="text-success font-semibold text-base">
                Apenas R$ {(parseFloat(appConfig.plan_price_annual.replace(',', '.')) / 12).toFixed(2).replace('.', ',')} por mês
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {appConfig.plan_features_annual.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-card-foreground font-medium leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full bg-gradient-primary hover:opacity-90 font-semibold text-base h-12 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              size="lg"
              onClick={() => {
                trackEvent("InitiateCheckout", { planType: "annual" });
                handlePlanClick('annual');
              }}
            >
              Começar Plano Anual
            </Button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Mais de 10.000 pessoas já transformaram suas finanças
          </p>
          <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
            <span>✅ Sem fidelidade</span>
            <span>✅ Cancele quando quiser</span>
            <span>✅ Suporte incluído</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
