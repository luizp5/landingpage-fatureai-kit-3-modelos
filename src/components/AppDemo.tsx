import { Smartphone, Monitor } from "lucide-react";

const AppDemo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Controle suas finanças de 
              <span className="text-primary block mt-2">onde estiver</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Simples, rápido e inteligente. Acesse seu dashboard completo pelo computador 
              ou gerencie tudo pelo WhatsApp quando estiver em movimento.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Monitor className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Dashboard Web Completo</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    Interface intuitiva com gráficos, relatórios e controle total das suas finanças
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Smartphone className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">WhatsApp Integration</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    Adicione receitas e despesas via mensagem. Simples e prático para o dia a dia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Imagem SEM fundo colorido e MAIOR */}
              <img 
                src="/imagens/app-macbook-poupeja.png"
                alt="Dashboard do app de finanças mostrando gráficos e controle financeiro"
                className="w-[800px] h-auto mx-auto drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-500"
              />
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-border/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <p className="text-3xl font-bold text-success tracking-tight">+32%</p>
                  <p className="text-sm text-muted-foreground mt-1">Economia este mês</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;