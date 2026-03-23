import DynamicHead from "@/components/DynamicHead";
import Footer from "@/components/Footer";
import { getTheme } from "@/config/themes";
import { appConfig } from "@/config/app";
import { ArrowRight, Check, MessageCircle, TrendingUp, Shield, Clock, ChevronDown, ChevronUp, Bot, Send, Wallet, PieChart, Sparkles, Star, Quote, Zap, Lock, ArrowUpDown, ArrowDown } from "lucide-react";
import { trackEvent } from "@/lib/facebookPixel";
import { useState } from "react";

// Template3 - Dark Premium Design - Copy Educativo
const Template3 = () => {
  const theme = getTheme("template3");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" style={{
      '--primary': '#00D9FF',
      '--secondary': '#A855F7',
      '--accent': '#EC4899',
      '--neon-cyan': '#00D9FF',
      '--neon-purple': '#A855F7',
      '--neon-pink': '#EC4899'
    } as React.CSSProperties}>
      <DynamicHead />

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 217, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 217, 255, 0.6); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes neon-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .neon-border {
          border: 1px solid rgba(0, 217, 255, 0.3);
          box-shadow: 0 0 10px rgba(0, 217, 255, 0.1),
                      inset 0 0 10px rgba(0, 217, 255, 0.05);
        }
        .neon-border:hover {
          border-color: rgba(0, 217, 255, 0.6);
          box-shadow: 0 0 20px rgba(0, 217, 255, 0.3),
                      inset 0 0 15px rgba(0, 217, 255, 0.1);
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>

      {/* Hero Section - Dark Premium with Neon */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center overflow-hidden py-16 sm:py-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #00D9FF 1px, transparent 1px), linear-gradient(to bottom, #00D9FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-1 lg:order-1">
              {/* Logo */}
              <div className="mb-8">
                <img
                  src={appConfig.logo_url}
                  alt={appConfig.company_name}
                  className="h-14 md:h-16 object-contain"
                />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Antes de assinar, entenda como funciona</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                Você já vive em grupos de WhatsApp
                <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent gradient-animate">
                  que tal um para suas finanças?
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                Grupo da família? Do trabalho? Da galera? Você já está o dia todo em grupos.{' '}
                <span className="text-white font-semibold">Agora imagine um com IA que organiza suas finanças automaticamente.</span>
                <span className="block mt-3 text-gray-500">Sem planilha. Sem app novo. Só o WhatsApp que você já usa.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Como Funciona
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
                <button
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5"
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Tirar Dúvidas
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Sem compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Funciona 100% no WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative order-2 lg:order-2 mt-8 lg:mt-0">
              {/* Phone frame - Same as Template1 - Responsive */}
              <div className="relative mx-auto w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px]">
                {/* Phone body */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 shadow-2xl shadow-black/50">
                  {/* Screen */}
                  <div className="bg-[#0a0a0a] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                    {/* WhatsApp header */}
                    <div className="bg-[#1a2d35] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                        <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white text-xs sm:text-sm font-semibold">{appConfig.company_name}</div>
                        <div className="text-white/50 text-[10px] sm:text-xs">Assistente Financeiro IA</div>
                      </div>
                    </div>

                    {/* Chat messages */}
                    <div className="p-3 sm:p-4 space-y-2.5 sm:space-y-3 min-h-[350px] sm:min-h-[400px]">
                      {/* User message - TV purchase */}
                      <div className="flex justify-end">
                        <div className="bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                          <p className="text-white text-sm">Gastei 1500 na TV em 5x</p>
                          <p className="text-white/50 text-xs mt-1 text-right">13:02</p>
                        </div>
                      </div>

                      {/* Bot response - Detailed */}
                      <div className="flex justify-start">
                        <div className="bg-[#202c33] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                          <p className="text-red-400 text-sm font-semibold mb-2">🟥💸 Despesa adicionada!</p>
                          <div className="text-xs text-gray-300 space-y-1">
                            <p><span className="text-gray-500">🆔 ID:</span> 2203130341</p>
                            <p><span className="text-gray-500">📲 Descrição:</span> TV parcela 1</p>
                            <p><span className="text-gray-500">💰 Valor:</span> <span className="text-yellow-400 font-semibold">R$ 300,00</span></p>
                            <p><span className="text-gray-500">📍 Categoria:</span> Bens de consumo</p>
                            <p><span className="text-gray-500">👀 Tipo:</span> Qualidade de vida</p>
                            <p><span className="text-gray-500">✅ Pagamento:</span> Cartão parcelado</p>
                            <p><span className="text-gray-500">🤔 Parcelas:</span> <span className="text-purple-400 font-semibold">1/5</span></p>
                            <p><span className="text-gray-500">🗓 Data:</span> 22/03/2026 13:02</p>
                          </div>
                          <p className="text-white/50 text-xs mt-2">13:02 ✓✓</p>
                        </div>
                      </div>

                      {/* User asking about installments */}
                      <div className="flex justify-end">
                        <div className="bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                          <p className="text-white text-sm">E as outras parcelas?</p>
                          <p className="text-white/50 text-xs mt-1 text-right">13:03</p>
                        </div>
                      </div>

                      {/* Bot response - Automatic */}
                      <div className="flex justify-start">
                        <div className="bg-[#202c33] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-3 border border-cyan-500/30">
                            <p className="text-cyan-400 text-sm font-semibold">✅ Automático!</p>
                            <p className="text-white text-xs mt-2">Vou registrar as próximas 4 parcelas nos meses seguintes 📅</p>
                          </div>
                          <p className="text-white/50 text-xs mt-2">13:03 ✓✓</p>
                        </div>
                      </div>
                    </div>

                    {/* Input bar */}
                    <div className="bg-[#202c33] px-3 py-2 flex items-center gap-2">
                      <div className="flex-1">
                        <div className="bg-[#2a3942] rounded-full px-4 py-2">
                          <p className="text-white/40 text-sm">Digite uma mensagem</p>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone shine effect */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-500 rounded-full blur-2xl opacity-20 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-20 animate-float delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona - 5 Steps Detailed */}
      <section id="como-funciona" className="py-16 sm:py-20 md:py-24 bg-[#0a0a0f] relative">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-semibold mb-6">
              COMO FUNCIONA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Entenda antes de
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                começar
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Em apenas 5 passos simples você terá controle total das suas finanças
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="glass-card rounded-3xl p-8 neon-border hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-cyan-500/30">
                      01
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Assine um plano</h3>
                    <p className="text-gray-400 mb-4">
                      Escolha entre o plano mensal ou anual. Após a confirmação do pagamento, você recebe acesso imediato ao grupo do WhatsApp.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-cyan-400">
                      <Clock className="w-4 h-4" />
                      <span>Leva menos de 5 minutos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass-card rounded-3xl p-8 neon-border hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-purple-500/30">
                      02
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Entre no grupo do WhatsApp</h3>
                    <p className="text-gray-400 mb-4">
                      Você será adicionado automaticamente a um grupo exclusivo com o assistente financeiro IA. Não precisa instalar nada — usa o WhatsApp que você já tem.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-purple-400">
                      <MessageCircle className="w-4 h-4" />
                      <span>Funciona no WhatsApp Web e App</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass-card rounded-3xl p-8 neon-border hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-pink-500/30">
                      03
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Registre suas transações</h3>
                    <p className="text-gray-400 mb-4">
                      Simplesmente envie mensagens quando ganhar ou gastar dinheiro. Exemplos:
                    </p>
                    <div className="bg-gray-800/50 rounded-xl p-4 space-y-2">
                      <p className="text-gray-300 text-sm">💬 "Gastei 50 no mercado"</p>
                      <p className="text-gray-300 text-sm">💬 "Recebi 3500 de salário"</p>
                      <p className="text-gray-300 text-sm">💬 "Paguei 800 de aluguel"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="glass-card rounded-3xl p-8 neon-border hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-cyan-500/30">
                      04
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">A IA organiza tudo automaticamente</h3>
                    <p className="text-gray-400 mb-4">
                      O assistente categoriza cada transação, atualiza seu saldo em tempo real e mantém tudo organizado sem você fazer nada.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                        <p className="text-cyan-400 font-bold text-lg">✓ Categorização</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                        <p className="text-purple-400 font-bold text-lg">✓ Saldo em tempo real</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="glass-card rounded-3xl p-8 neon-border hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-purple-500/30">
                      05
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Consulte relatórios quando quiser</h3>
                    <p className="text-gray-400 mb-4">
                      Peça relatórios e análises a qualquer momento. O assistente responde em segundos com insights detalhados.
                    </p>
                    <div className="bg-gray-800/50 rounded-xl p-4 space-y-2">
                      <p className="text-gray-300 text-sm">💬 "Me dá um resumo do mês"</p>
                      <p className="text-gray-300 text-sm">💬 "Quanto gastei com alimentação?"</p>
                      <p className="text-gray-300 text-sm">💬 "Qual meu saldo atual?"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Detalhadas */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#0f0f1a] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-semibold mb-6">
              FUNCIONALIDADES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              O que você pode
              <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                fazer com o assistente
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "📝", title: "Registre gastos", desc: "Mande uma mensagem simples e o valor é registrado automaticamente" },
              { icon: "💰", title: "Consulte saldo", desc: "Saiba quanto tem a qualquer momento" },
              { icon: "📊", title: "Relatórios mensais", desc: "Receba resumos automáticos no fim de cada mês" },
              { icon: "🗂️", title: "Categorização", desc: "Todas as despesas organizadas por categoria automaticamente" },
              { icon: "📸", title: "Leia cupons", desc: "Tire foto do cupom fiscal e a IA extrai os dados" },
              { icon: "🎤", title: "Envie áudios", desc: "Fale em vez de digitar. A IA transcreve e registra" },
              { icon: "📈", title: "Gráficos", desc: "Visualize suas finanças com gráficos detalhados" },
              { icon: "🎯", title: "Metas", desc: "Defina metas de economia e acompanhe o progresso" },
              { icon: "🔔", title: "Alertas", desc: "Receba avisos sobre contas e limites de gastos" }
            ].map((feature, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 border border-white/5 hover:border-cyan-500/30">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 md:py-24 bg-[#0a0a0f] relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-pink-500/10 text-pink-400 rounded-full text-sm font-semibold mb-6">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Perguntas e
              <span className="block mt-2 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                respostas
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Preciso instalar algum app?",
                a: "Não! O {appConfig.company_name} funciona 100% no WhatsApp. Você não precisa instalar nenhum aplicativo adicional. Basta entrar no grupo e começar a usar."
              },
              {
                q: "Meus dados estão seguros?",
                a: "Sim, levamos a segurança muito a sério. Todas as suas informações são criptografadas e protegidas. Além disso, seus dados financeiros nunca são compartilhados com terceiros."
              },
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim! Não há fidelidade. Você pode cancelar sua assinatura quando quiser sem nenhuma multa ou penalidade."
              },
              {
                q: "Quanto tempo leva para ter acesso?",
                a: "O acesso é liberado imediatamente após a confirmação do pagamento. Em menos de 5 minutos você já estará no grupo usando o assistente."
              },
              {
                q: "O assistente entende português informal?",
                a: "Sim! A IA foi treinada para entender português brasileiro, gírias, abreviações e até o jeito que você fala naturalmente. Escreva como quiser."
              },
              {
                q: "Posso enviar áudio em vez de texto?",
                a: "Com certeza! O assistente transcreve seus áudios automaticamente e registra tudo. Você pode falar em vez de digitar."
              },
              {
                q: "Funciona no WhatsApp Web?",
                a: "Sim! Funciona perfeitamente no WhatsApp Web, no aplicativo mobile e em qualquer plataforma onde você usa o WhatsApp."
              },
              {
                q: "E se eu esquecer de registrar alguma despesa?",
                a: "Sem problemas! Você pode registrar retroativamente a qualquer momento. Basta enviar a mensagem com a data, por exemplo: 'Gastei 50 no mercado ontem'."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden neon-border">
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-white pr-4">{faq.q.replace('{appConfig.company_name}', appConfig.company_name)}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 leading-relaxed">{faq.a.replace('{appConfig.company_name}', appConfig.company_name)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#0f0f1a] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>

              {/* Shield icon */}
              <div className="relative z-10 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-cyan-500/30">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>

              <h2 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Risco zero para você
              </h2>

              <p className="relative z-10 text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Experimente o {appConfig.company_name} sem compromisso. Se não gostar, cancele quando quiser — sem multas, sem penalidades, sem dor de cabeça.
              </p>

              <div className="relative z-10 grid md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-3xl mb-3">🔒</div>
                  <h4 className="text-white font-bold mb-2">Sem fidelidade</h4>
                  <p className="text-gray-400 text-sm">Cancele quando quiser</p>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-3xl mb-3">💰</div>
                  <h4 className="text-white font-bold mb-2">Sem multas</h4>
                  <p className="text-gray-400 text-sm">Zero penalidades</p>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="text-white font-bold mb-2">Acesso rápido</h4>
                  <p className="text-gray-400 text-sm">Em menos de 5 minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-16 sm:py-20 md:py-24 bg-[#0a0a0f] relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-semibold mb-6">
              INVESTIMENTO
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Escolha o plano ideal
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                para você
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <div className="glass-card rounded-3xl p-8 neon-border hover:scale-[1.02] transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Plano Mensal</h3>
                <div className="mb-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                    R$ {appConfig.plan_price_monthly}
                  </span>
                </div>
                <p className="text-gray-400">por mês</p>
              </div>

              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_monthly.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30"
                onClick={() => {
                  trackEvent("InitiateCheckout", { planType: "monthly" });
                  handlePlanClick('monthly');
                }}
              >
                Começar Plano Mensal
              </button>
            </div>

            {/* Annual Plan - Featured */}
            <div className="relative">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  Mais vantajoso
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 neon-border hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>

                <div className="relative z-10">
                  <div className="text-center mb-8 pt-4">
                    <h3 className="text-2xl font-bold text-white mb-4">Plano Anual</h3>
                    <div className="mb-2">
                      <span className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        R$ {appConfig.plan_price_annual}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-3">por ano</p>
                    <p className="text-cyan-400 font-semibold">
                      Apenas R$ {(parseFloat(appConfig.plan_price_annual.replace(',', '.')) / 12).toFixed(2).replace('.', ',')} por mês
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {appConfig.plan_features_annual.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30"
                    onClick={() => {
                      trackEvent("InitiateCheckout", { planType: "annual" });
                      handlePlanClick('annual');
                    }}
                  >
                    Começar Plano Anual
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400" />
                Sem fidelidade
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400" />
                Cancele quando quiser
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400" />
                Suporte via WhatsApp
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#0a0a0f] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para organizar
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                suas finanças?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Entenda como funciona antes de assinar. Sem complicação, sem compromisso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Tirar Dúvidas
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Template3;
