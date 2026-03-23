import { CheckCircle, TrendingUp, Target, BarChart3, MessageCircle } from "lucide-react";
import { appConfig } from "@/config/app";

const benefits = [
  {
    icon: CheckCircle,
    title: "Movimentos ilimitados",
    description: "Registre quantas receitas e despesas precisar, sem limite de transações."
  },
  {
    icon: BarChart3,
    title: "Dashboard completo",
    description: "Visualize seus dados financeiros em gráficos intuitivos e relatórios detalhados."
  },
  {
    icon: Target,
    title: "Metas financeiras",
    description: "Defina objetivos e acompanhe seu progresso rumo à independência financeira."
  },
  {
    icon: TrendingUp,
    title: "Relatórios detalhados",
    description: "Análises profundas dos seus hábitos financeiros com insights valiosos."
  },
  {
    icon: MessageCircle,
    title: "Integração WhatsApp",
    description: "Registre gastos e receitas diretamente pelo WhatsApp de forma prática."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Por que escolher o <span className="text-primary">{appConfig.company_name}</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubra como nossa plataforma pode revolucionar o modo como você gerencia suas finanças
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-card p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/40 hover:border-primary/20"
              >
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-4 tracking-tight">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;