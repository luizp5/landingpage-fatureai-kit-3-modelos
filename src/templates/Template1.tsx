import DynamicHead from "@/components/DynamicHead";
import Footer from "@/components/Footer";
import { getTheme } from "@/config/themes";
import { appConfig } from "@/config/app";
import { Sparkles, MessageCircle, Check, Star, Quote, ArrowRight, AlertCircle, TrendingDown, Calendar, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// Template1 - Modelo 1: Ângulo Dor - Bold Financial Drama Design
const Template1 = () => {
  const theme = getTheme("template1");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePlanClick = (planType: 'month' | 'year') => {
    const planUrl = planType === 'month' ? appConfig.monthly_plan_url : appConfig.annual_plan_url;

    // Se tiver URL de pagamento configurada, usa ela
    if (planUrl && planUrl.trim() !== '') {
      window.open(planUrl, '_blank');
    } else {
      // Caso contrário, usa WhatsApp como fallback
      const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planType === 'month' ? 'Mensal' : 'Anual'} da ${appConfig.company_name}.`);
      window.open(`https://wa.me/${appConfig.support_whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden" style={{
      '--primary': '#FF4D00',
      '--secondary': '#FF6B35',
      '--accent': '#FF8C61',
      '--coral': '#FFB08A'
    } as React.CSSProperties}>
      <DynamicHead />

      {/* CSS Animations */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 77, 0, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 77, 0, 0.6); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes number-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
        .animate-slideIn { animation: slideIn 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-number { animation: number-float 8s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .noise-overlay {
          position: relative;
        }
        .noise-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
        }
        @keyframes money-float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(5deg); }
          50% { transform: translate(-5px, -25px) rotate(-3deg); }
          75% { transform: translate(-15px, -10px) rotate(3deg); }
        }
        @keyframes wing-flap {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(0.6); }
        }
        @keyframes fly-away {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
          100% { transform: translate(var(--fly-x, 100px), var(--fly-y, -150px)) rotate(var(--fly-rotate, 15deg)); opacity: 0; }
        }
        .animate-money { animation: money-float 4s ease-in-out infinite; }
        .animate-wing { animation: wing-flap 0.3s ease-in-out infinite; transform-origin: center; }
        .animate-fly { animation: fly-away 6s ease-in-out infinite; }
        .delay-fly-1 { animation-delay: 0s; --fly-x: 90px; --fly-y: -100px; --fly-rotate: 10deg; }
        .delay-fly-2 { animation-delay: 0.7s; --fly-x: -110px; --fly-y: -150px; --fly-rotate: -15deg; }
        .delay-fly-3 { animation-delay: 1.4s; --fly-x: 70px; --fly-y: -130px; --fly-rotate: 8deg; }
        .delay-fly-4 { animation-delay: 2.1s; --fly-x: -90px; --fly-y: -170px; --fly-rotate: -12deg; }
        .delay-fly-5 { animation-delay: 2.8s; --fly-x: 60px; --fly-y: -110px; --fly-rotate: 6deg; }
        .delay-fly-6 { animation-delay: 3.5s; --fly-x: -100px; --fly-y: -140px; --fly-rotate: -10deg; }
        .delay-fly-7 { animation-delay: 4.2s; --fly-x: 80px; --fly-y: -160px; --fly-rotate: 14deg; }
      `}</style>

      {/* Hero Section - Bold Typography with Dramatic Gradient + WhatsApp Mockup */}
      <section className="min-h-[80vh] sm:min-h-screen relative flex items-center overflow-hidden py-16 sm:py-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00] via-[#FF6B35] to-[#9333EA] gradient-animate opacity-20"></div>

        {/* Floating decorations */}
        <div className="absolute top-20 left-10 text-[300px] font-bold text-white/5 animate-number delay-200">$</div>
        <div className="absolute bottom-20 right-10 text-[400px] font-bold text-white/5 animate-number delay-500">?</div>

        {/* Flying money decorations - 7 moedas voando */}
        <div className="absolute top-[20%] left-[15%] animate-fly delay-fly-1">
          <svg viewBox="0 0 100 80" className="w-16 h-12 animate-money">
            <defs>
              <linearGradient id="coinGold1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FFD700'}} />
                <stop offset="50%" style={{stopColor: '#FFA500'}} />
                <stop offset="100%" style={{stopColor: '#FFD700'}} />
              </linearGradient>
            </defs>
            <ellipse cx="30" cy="40" rx="20" ry="8" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '30px 40px'}}/>
            <ellipse cx="70" cy="40" rx="20" ry="8" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '70px 40px', animationDelay: '0.15s'}}/>
            <ellipse cx="50" cy="40" rx="22" ry="22" fill="url(#coinGold1)" stroke="#FFA500" strokeWidth="2"/>
            <text x="50" y="48" textAnchor="middle" fill="#B8860B" fontSize="20" fontWeight="bold">R$</text>
          </svg>
        </div>

        <div className="absolute top-[30%] right-[20%] animate-fly delay-fly-2">
          <svg viewBox="0 0 100 80" className="w-20 h-14 animate-money" style={{animationDelay: '0.7s'}}>
            <defs>
              <linearGradient id="coinGold2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FFD700'}} />
                <stop offset="50%" style={{stopColor: '#FFA500'}} />
                <stop offset="100%" style={{stopColor: '#FFD700'}} />
              </linearGradient>
            </defs>
            <ellipse cx="30" cy="40" rx="22" ry="9" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '30px 40px'}}/>
            <ellipse cx="70" cy="40" rx="22" ry="9" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '70px 40px', animationDelay: '0.15s'}}/>
            <ellipse cx="50" cy="40" rx="24" ry="24" fill="url(#coinGold2)" stroke="#FFA500" strokeWidth="2"/>
            <text x="50" y="49" textAnchor="middle" fill="#B8860B" fontSize="22" fontWeight="bold">R$</text>
          </svg>
        </div>

        <div className="absolute bottom-[35%] left-[25%] animate-fly delay-fly-3">
          <svg viewBox="0 0 100 80" className="w-10 h-8 animate-money" style={{animationDelay: '1.4s'}}>
            <defs>
              <linearGradient id="coinGold3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FFD700'}} />
                <stop offset="50%" style={{stopColor: '#FFA500'}} />
                <stop offset="100%" style={{stopColor: '#FFD700'}} />
              </linearGradient>
            </defs>
            <ellipse cx="28" cy="40" rx="14" ry="5" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '28px 40px'}}/>
            <ellipse cx="72" cy="40" rx="14" ry="5" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '72px 40px', animationDelay: '0.15s'}}/>
            <ellipse cx="50" cy="40" rx="16" ry="16" fill="url(#coinGold3)" stroke="#FFA500" strokeWidth="1.5"/>
            <text x="50" y="45" textAnchor="middle" fill="#B8860B" fontSize="12" fontWeight="bold">R$</text>
          </svg>
        </div>

        <div className="absolute top-[45%] right-[30%] animate-fly delay-fly-4">
          <svg viewBox="0 0 100 80" className="w-8 h-6 animate-money" style={{animationDelay: '2.1s'}}>
            <defs>
              <linearGradient id="coinGold4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FFD700'}} />
                <stop offset="50%" style={{stopColor: '#FFA500'}} />
                <stop offset="100%" style={{stopColor: '#FFD700'}} />
              </linearGradient>
            </defs>
            <ellipse cx="26" cy="40" rx="12" ry="4" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '26px 40px'}}/>
            <ellipse cx="74" cy="40" rx="12" ry="4" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '74px 40px', animationDelay: '0.15s'}}/>
            <ellipse cx="50" cy="40" rx="14" ry="14" fill="url(#coinGold4)" stroke="#FFA500" strokeWidth="1.5"/>
            <text x="50" y="44" textAnchor="middle" fill="#B8860B" fontSize="10" fontWeight="bold">R$</text>
          </svg>
        </div>

        <div className="absolute top-[25%] left-[45%] animate-fly delay-fly-5">
          <svg viewBox="0 0 100 80" className="w-14 h-10 animate-money" style={{animationDelay: '2.8s'}}>
            <defs>
              <linearGradient id="coinGold5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FFD700'}} />
                <stop offset="50%" style={{stopColor: '#FFA500'}} />
                <stop offset="100%" style={{stopColor: '#FFD700'}} />
              </linearGradient>
            </defs>
            <ellipse cx="30" cy="40" rx="18" ry="7" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '30px 40px'}}/>
            <ellipse cx="70" cy="40" rx="18" ry="7" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '70px 40px', animationDelay: '0.15s'}}/>
            <ellipse cx="50" cy="40" rx="20" ry="20" fill="url(#coinGold5)" stroke="#FFA500" strokeWidth="2"/>
            <text x="50" y="47" textAnchor="middle" fill="#B8860B" fontSize="16" fontWeight="bold">R$</text>
          </svg>
        </div>

        <div className="absolute bottom-[40%] right-[15%] animate-fly delay-fly-6">
          <svg viewBox="0 0 100 80" className="w-12 h-9 animate-money" style={{animationDelay: '3.5s'}}>
            <defs>
              <linearGradient id="coinGold6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FFD700'}} />
                <stop offset="50%" style={{stopColor: '#FFA500'}} />
                <stop offset="100%" style={{stopColor: '#FFD700'}} />
              </linearGradient>
            </defs>
            <ellipse cx="28" cy="40" rx="15" ry="6" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '28px 40px'}}/>
            <ellipse cx="72" cy="40" rx="15" ry="6" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '72px 40px', animationDelay: '0.15s'}}/>
            <ellipse cx="50" cy="40" rx="17" ry="17" fill="url(#coinGold6)" stroke="#FFA500" strokeWidth="1.5"/>
            <text x="50" y="46" textAnchor="middle" fill="#B8860B" fontSize="13" fontWeight="bold">R$</text>
          </svg>
        </div>

        <div className="absolute top-[55%] left-[10%] animate-fly delay-fly-7">
          <svg viewBox="0 0 100 80" className="w-18 h-12 animate-money" style={{animationDelay: '4.2s'}}>
            <defs>
              <linearGradient id="coinGold7" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FFD700'}} />
                <stop offset="50%" style={{stopColor: '#FFA500'}} />
                <stop offset="100%" style={{stopColor: '#FFD700'}} />
              </linearGradient>
            </defs>
            <ellipse cx="30" cy="40" rx="24" ry="10" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '30px 40px'}}/>
            <ellipse cx="70" cy="40" rx="24" ry="10" fill="#FFD700" opacity="0.8" className="animate-wing" style={{transformOrigin: '70px 40px', animationDelay: '0.15s'}}/>
            <ellipse cx="50" cy="40" rx="26" ry="26" fill="url(#coinGold7)" stroke="#FFA500" strokeWidth="2"/>
            <text x="50" y="50" textAnchor="middle" fill="#B8860B" fontSize="24" fontWeight="bold">R$</text>
          </svg>
        </div>

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="order-1 lg:order-1">
              {/* Logo */}
              <div className="mb-12 opacity-0 animate-slideUp" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <img
                  src={appConfig.logo_url}
                  alt={appConfig.company_name}
                  className="h-14 md:h-16 object-contain"
                />
              </div>

              {/* Hero Typography - Dramatic layered headlines */}
              <div className="relative mb-10">
                <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6">
                  <div className="opacity-0 animate-slideUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                    <span className="block text-white">Você vive em grupos</span>
                    <span className="block text-white mt-2">de WhatsApp o dia todo</span>
                  </div>

                  <div className="mt-6 md:mt-8 opacity-0 animate-slideUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    <span className="block relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-[#FF6B35] to-[#FF8C61] gradient-animate">
                        Que tal usar um para
                      </span>
                      <span className="block mt-3 md:mt-4 text-white/90 text-3xl sm:text-4xl md:text-5xl">
                        organizar suas finanças?
                      </span>
                    </span>
                  </div>
                </h1>
              </div>

              {/* Subheadline */}
              <div className="max-w-xl mb-10 opacity-0 animate-slideUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  Grupo da família? Do trabalho? Da churrascada? Você já tá em grupo o tempo todo.
                  <span className="text-[#FF6B35] font-semibold">{' '}Agora imagine um grupo com IA que registra seus gastos, atualiza seu saldo e te mostra onde está seu dinheiro.</span>
                  {' '}Sem planilha. Sem app novo. Só o WhatsApp que você já ama.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 opacity-0 animate-slideUp" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <button
                  className="group px-8 py-4 bg-[#FF4D00] hover:bg-[#FF6B35] text-white rounded-2xl font-bold text-lg transition-all duration-300 animate-pulse-glow hover:scale-105"
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center justify-center gap-2">
                    Quero organizar minhas finanças
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-start items-center gap-6 text-sm text-white/50 opacity-0 animate-slideUp" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF4D00] rounded-full animate-pulse"></div>
                  <span>Sem app para instalar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF4D00] rounded-full animate-pulse"></div>
                  <span>Funciona no WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF4D00] rounded-full animate-pulse"></div>
                  <span>Acesso em minutos</span>
                </div>
              </div>
            </div>

            {/* Right - WhatsApp Mockup (Pure CSS) */}
            <div className="relative opacity-0 animate-slideIn order-2 lg:order-2 mt-8 lg:mt-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              {/* Phone frame - Responsive sizing */}
              <div className="relative mx-auto w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px]">
                {/* Phone body */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 shadow-2xl shadow-black/50">
                  {/* Screen */}
                  <div className="bg-[#0a0a0a] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                    {/* WhatsApp header */}
                    <div className="bg-[#1a2d35] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#FF6B35] flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white text-xs sm:text-sm font-semibold">{appConfig.company_name}</div>
                        <div className="text-white/50 text-[10px] sm:text-xs">Assistente Financeiro</div>
                      </div>
                    </div>

                    {/* Chat messages */}
                    <div className="p-3 sm:p-4 space-y-2.5 sm:space-y-3 min-h-[350px] sm:min-h-[400px]">
                      {/* User messages */}
                      <div className="flex justify-end">
                        <div className="bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                          <p className="text-white text-sm">Gastei 50 no mercado</p>
                          <p className="text-white/50 text-xs mt-1 text-right">14:32</p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                          <p className="text-white text-sm">Recebi 3500 de salário</p>
                          <p className="text-white/50 text-xs mt-1 text-right">14:35</p>
                        </div>
                      </div>

                      {/* Bot response */}
                      <div className="flex justify-start">
                        <div className="bg-[#202c33] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                          <p className="text-white text-sm">✅ Registrado: Mercado - R$ 50</p>
                          <p className="text-white text-sm">✅ Registrado: Salário - R$ 3.500</p>
                          <p className="text-emerald-400 text-sm mt-2 font-semibold">Saldo atual: R$ 3.450</p>
                          <p className="text-white/50 text-xs mt-1">14:35</p>
                        </div>
                      </div>

                      {/* User asking balance */}
                      <div className="flex justify-end">
                        <div className="bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                          <p className="text-white text-sm">Qual meu saldo?</p>
                          <p className="text-white/50 text-xs mt-1 text-right">14:40</p>
                        </div>
                      </div>

                      {/* Bot balance response */}
                      <div className="flex justify-start">
                        <div className="bg-[#202c33] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                          <div className="bg-gradient-to-r from-[#FF4D00]/20 to-[#FF6B35]/20 rounded-xl p-3 border border-[#FF4D00]/30">
                            <p className="text-[#FF6B35] text-lg font-bold">💰 Seu Saldo</p>
                            <p className="text-white text-2xl font-black">R$ 3.450</p>
                            <p className="text-white/70 text-xs mt-2">Receitas: R$ 3.500 | Despesas: R$ 50</p>
                          </div>
                          <p className="text-white/50 text-xs mt-2">14:40 ✓✓</p>
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
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#FF4D00] rounded-full blur-2xl opacity-20 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#FF6B35] rounded-full blur-2xl opacity-20 animate-float delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: A realidade - Dark with dramatic cards + 3D elements */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background 3D elements */}
        <div className="absolute top-20 right-20 w-48 h-48 animate-float opacity-10 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FF4D00', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#FF4D00', stopOpacity: 0}} />
              </linearGradient>
            </defs>
            <rect x="20" y="20" width="15" height="60" fill="url(#chartGradient)" rx="2" opacity="0.7"/>
            <rect x="42" y="35" width="15" height="45" fill="url(#chartGradient)" rx="2" opacity="0.7"/>
            <rect x="64" y="25" width="15" height="55" fill="url(#chartGradient)" rx="2" opacity="0.7"/>
            <line x1="10" y1="85" x2="90" y2="85" stroke="#FF6B35" strokeWidth="2" opacity="0.5"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                  <AlertCircle className="w-4 h-4" />
                  <span>A realidade</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                  Todo mês
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FF6B35]">
                    a mesma história.
                  </span>
                </h2>

                <div className="space-y-6 text-xl text-white/60 leading-relaxed">
                  <p className="text-white">
                    Você recebe, paga as contas, e o dinheiro{' '}
                    <span className="text-[#FF4D00] font-bold">some</span>.
                    No fim do mês você tenta lembrar onde gastou e{' '}
                    <span className="text-[#FF4D00] font-bold">não consegue</span>.
                  </p>
                  <p>
                    Fica a sensação de que deu para muita coisa sem sobrar nada.
                  </p>
                  <p className="text-2xl font-semibold text-white">
                    Você já tentou planilha. Tentou aplicativo. Funcionou por uns dias e parou.
                  </p>
                  <p className="text-[#FF6B35] font-bold text-xl">
                    Não é falta de vontade — é que o método não se encaixa na sua rotina.
                  </p>
                </div>
              </div>

              {/* Right - Visual cards with 3D floating wallet */}
              <div className="relative">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#FF4D00] rounded-full blur-[120px] opacity-20"></div>

                {/* 3D Wallet illustration */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-float hidden sm:block">
                  <svg viewBox="0 0 100 80" className="w-32 h-26">
                    <defs>
                      <linearGradient id="walletGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#FF4D00'}} />
                        <stop offset="100%" style={{stopColor: '#FF6B35'}} />
                      </linearGradient>
                      <filter id="walletShadow">
                        <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3"/>
                      </filter>
                    </defs>
                    {/* Wallet body */}
                    <rect x="10" y="20" width="80" height="50" rx="5" fill="url(#walletGradient)" filter="url(#walletShadow)"/>
                    {/* Cards coming out */}
                    <rect x="15" y="10" width="70" height="40" rx="4" fill="#FFB08A" opacity="0.8"/>
                    <rect x="20" y="5" width="70" height="40" rx="4" fill="#FF8C61" opacity="0.6"/>
                    {/* Money symbol */}
                    <text x="50" y="50" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">R$</text>
                  </svg>
                </div>

                <div className="space-y-4 relative mt-16 sm:mt-20">
                  {[
                    { icon: <TrendingDown className="w-8 h-8" />, text: "Chega no dia 20 sem dinheiro", delay: "0s" },
                    { icon: <AlertCircle className="w-8 h-8" />, text: "Não sabe onde gastou", delay: "0.1s" },
                    { icon: <MessageCircle className="w-8 h-8" />, text: "Sente culpa e ansiedade", delay: "0.2s" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="glass-card rounded-3xl p-6 hover:bg-white/5 transition-all duration-300 hover:scale-[1.02]"
                      style={{ animation: `slideUp 0.6s ease-out ${item.delay} forwards`, opacity: 0 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#FF4D00] to-[#FF6B35] rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                          {item.icon}
                        </div>
                        <p className="text-xl font-semibold text-white">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: A solução - Glassmorphism cards */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4D00] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9333EA] rounded-full blur-[200px] opacity-10"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#FF4D00]/10 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Check className="w-4 h-4" />
              <span>A solução</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Controle financeiro de{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-[#FF6B35] to-[#FF8C61] gradient-animate">
                  verdade
                </span>
              </span>
              {' '}— só mandando mensagem no WhatsApp
            </h2>
          </div>

          {/* Main solution card */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-[40px] p-12 md:p-16 relative overflow-hidden">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF4D00] via-[#FF6B35] to-[#FF8C61]"></div>

              <p className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-12">
                O <span className="font-bold text-[#FF6B35]">{appConfig.company_name}</span> é um assistente financeiro com IA que funciona em um <span className="text-[#FF6B35] font-bold">grupo exclusivo no WhatsApp</span>.
                Você entra no grupo, manda uma mensagem simples quando ganha ou gasta alguma coisa,
                e o sistema registra, organiza e te mostra onde seu dinheiro está indo.
              </p>

              <div className="bg-gradient-to-r from-[#FF4D00]/10 to-[#FF6B35]/10 rounded-2xl p-8 border border-[#FF4D00]/20">
                <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
                  Sem abrir app. Sem montar planilha. Só mandar mensagem — como você já faz todo dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona - 3 steps with dramatic layout */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                Simples{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FF6B35]">
                  assim
                </span>
              </h2>
              <p className="text-xl text-white/50">
                Três passos para organizar suas finanças
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#FF4D00]/30 via-[#FF6B35]/50 to-[#FF8C61]/30"></div>

              {[
                {
                  step: "01",
                  title: "Entre no grupo do WhatsApp",
                  description: "Após assinar, você é adicionado ao grupo exclusivo com IA. Zero configuração.",
                  color: "from-[#FF4D00] to-[#FF6B35]"
                },
                {
                  step: "02",
                  title: "Mande mensagens",
                  description: "Digite o valor e o que foi. O bot registra tudo automaticamente.",
                  color: "from-[#FF6B35] to-[#FF8C61]"
                },
                {
                  step: "03",
                  title: "Consulte quando quiser",
                  description: "Saldo e relatório na hora. O bot responde em segundos.",
                  color: "from-[#FF8C61] to-[#FFB08A]"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div
                    className="glass-card rounded-3xl p-8 h-full relative overflow-hidden transition-all duration-500 hover:scale-[1.03]"
                    style={{ animation: `slideUp 0.6s ease-out ${index * 0.15}s forwards`, opacity: 0 }}
                  >
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Step number */}
                    <div className="text-7xl md:text-8xl font-black text-white/5 mb-6 leading-none">
                      {item.step}
                    </div>

                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-6 text-white`}>
                        {index === 0 ? <MessageCircle className="w-8 h-8" /> :
                         index === 1 ? <Zap className="w-8 h-8" /> :
                         <Calendar className="w-8 h-8" />}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">
                        {item.title}
                      </h3>

                      <p className="text-lg text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Superpoderes do Agente IA - 4 capacidades */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF4D00] rounded-full blur-[300px] opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9333EA] rounded-full blur-[300px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-[#FF4D00]/10 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-bold mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Superpoderes do Agente IA</span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Não é só um bot.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-[#FF6B35] to-[#FF8C61] gradient-animate">
                  É inteligência.
                </span>
              </h2>

              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                O {appConfig.company_name} usa IA de ponta para entender você como ninguém
              </p>
            </div>

            {/* 4 Capability Cards */}
            <div className="grid md:grid-cols-2 gap-8 relative">
              {[
                {
                  number: "01",
                  icon: "🎤",
                  title: "Entende Áudio",
                  description: "Fale em vez de digitar. Envie áudio no grupo e o agente transcreve e registra tudo automaticamente.",
                  example: '"Fala bot, gastei 45 reais no almoço hoje"',
                  tech: "Speech-to-Text AI",
                  gradient: "from-purple-500 to-pink-500",
                  delay: "0s"
                },
                {
                  number: "02",
                  icon: "📸",
                  title: "Visão Computacional",
                  description: "Tire foto do cupom fiscal. O agente extrai valor, data, estabelecimento e categoria automaticamente.",
                  example: '"Foto do cupom" → Extrai: Mercado R$127,50',
                  tech: "Computer Vision AI",
                  gradient: "from-blue-500 to-cyan-500",
                  delay: "0.1s"
                },
                {
                  number: "03",
                  icon: "🧠",
                  title: "Entende Contexto",
                  description: "Escreva como quiser. O agente entende português brasileiro, gírias, abreviações e até ironia.",
                  example: '"Gastei um ptz no mercadão" → R$100 mercado',
                  tech: "NLP Contextual",
                  gradient: "from-[#FF4D00] to-[#FF6B35]",
                  delay: "0.2s"
                },
                {
                  number: "04",
                  icon: "📊",
                  title: "Relatórios Instantâneos",
                  description: "Pergunte qualquer coisa. O agente analisa seus dados e responde na hora com insights reais.",
                  example: '"Quanto gastei com alimentação?" → R$450 este mês',
                  tech: "Data Analytics AI",
                  gradient: "from-green-500 to-emerald-500",
                  delay: "0.3s"
                }
              ].map((capability, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animation: `slideUp 0.6s ease-out ${capability.delay} forwards`, opacity: 0 }}
                >
                  {/* Card */}
                  <div className="glass-card rounded-3xl p-8 relative overflow-hidden h-full transition-all duration-500 hover:scale-[1.02]">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${capability.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                    {/* Number */}
                    <div className={`text-8xl font-black text-white/5 mb-6 leading-none`}>
                      {capability.number}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${capability.gradient} mb-6 text-4xl group-hover:scale-110 transition-transform duration-300`}>
                        {capability.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                        {capability.title}
                      </h3>

                      {/* Description */}
                      <p className="text-lg text-white/60 mb-6 leading-relaxed">
                        {capability.description}
                      </p>

                      {/* Example box */}
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                        <p className="text-sm text-white/40 mb-2 font-medium">{capability.tech}</p>
                        <p className="text-white/80 text-sm md:text-base">
                          {capability.example}
                        </p>
                      </div>
                    </div>

                    {/* Glow effect on hover */}
                    <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${capability.gradient} rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom highlight */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FF4D00]/10 via-[#FF6B35]/10 to-[#9333EA]/10 px-8 py-4 rounded-2xl border border-[#FF4D00]/20">
                <Sparkles className="w-6 h-6 text-[#FF6B35]" />
                <p className="text-lg md:text-xl text-white font-semibold">
                  Tudo isso sem você precisar configurar nada. Funciona desde o primeiro dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades - Modern grid */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FF4D00] rounded-full blur-[300px] opacity-5"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                Tudo que você{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FF6B35]">
                  precisa
                </span>
              </h2>
              <p className="text-xl text-white/50">
                Sem complicação. Sem app novo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "📲", text: "Registro de gastos e ganhos pelo WhatsApp" },
                { icon: "💰", text: "Saldo atualizado em tempo real" },
                { icon: "📊", text: "Relatório mensal automático" },
                { icon: "🗂️", text: "Categorização dos seus gastos" },
                { icon: "🔔", text: "Nenhum app para instalar" },
                { icon: "⚡", text: "Acesso liberado em minutos" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group hover:scale-[1.02] relative"
                  style={{ animation: `slideUp 0.5s ease-out ${index * 0.08}s forwards`, opacity: 0 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                    <p className="text-lg font-medium text-white pt-1">{feature.text}</p>
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF4D00]/0 to-[#FF6B35]/0 group-hover:from-[#FF4D00]/10 group-hover:to-[#FF6B35]/10 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Dramatic gradient */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00] via-[#FF6B35] to-[#9333EA] gradient-animate"></div>

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay"></div>

        {/* Floating decorations */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 rounded-full animate-float delay-300"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Chega de viver sem saber
              <span className="block mt-4">onde seu dinheiro vai</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-2xl mx-auto">
              Comece hoje a organizar suas finanças de forma simples e sem complicação.
            </p>

            <button
              className="group px-12 py-6 bg-white text-[#FF4D00] rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 inline-flex items-center gap-4"
              onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>✅ Quero organizar minhas finanças agora</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Funciona no WhatsApp que você já tem
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Sem configuração complicada
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Acesso liberado em minutos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos - Modern cards */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                O que nossos{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FF6B35]">
                  clientes
                </span>
                {' '}dizem
              </h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Histórias reais de pessoas que organizaram suas finanças pelo WhatsApp
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Silva",
                  role: "Empresária",
                  content: "Eu nunca consegui manter uma planilha por mais de uma semana. Com o grupo do WhatsApp com IA eu uso todo dia porque é só mandar mensagem mesmo.",
                  rating: 5,
                  delay: "0s"
                },
                {
                  name: "João Santos",
                  role: "Freelancer",
                  content: "Finalmente sei onde meu dinheiro está indo. O bot registra tudo e ainda me mostra quanto gastei em cada categoria no fim do mês.",
                  rating: 5,
                  delay: "0.1s"
                },
                {
                  name: "Ana Costa",
                  role: "Professora",
                  content: "Simples e eficiente. Mando 'gastei 50 no mercado' e pronto. Tenho controle sem precisar abrir nenhum app.",
                  rating: 5,
                  delay: "0.2s"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group"
                  style={{ animation: `slideUp 0.6s ease-out ${testimonial.delay} forwards`, opacity: 0 }}
                >
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-[#FF6B35] mb-4" />
                    <p className="text-white/80 leading-relaxed text-lg">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FF6B35] fill-current" />
                    ))}
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-[#FF6B35] font-medium">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planos - Modern pricing cards + Animated chart */}
      <section id="plans" className="py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF4D00] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9333EA] rounded-full blur-[200px] opacity-10"></div>

        {/* Animated financial chart in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 hidden lg:block">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-float">
            <defs>
              <linearGradient id="chartLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#FF4D00'}} />
                <stop offset="100%" style={{stopColor: '#FF6B35'}} />
              </linearGradient>
              <linearGradient id="chartAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FF4D00', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#FF4D00', stopOpacity: 0}} />
              </linearGradient>
            </defs>
            {/* Grid lines */}
            {[40, 80, 120, 160].map((y, i) => (
              <line key={i} x1="20" y1={y} x2="180" y2={y} stroke="#FF6B35" strokeWidth="0.5" opacity="0.3"/>
            ))}
            {/* Area */}
            <path d="M 20 160 Q 60 140, 100 100 T 180 40 L 180 180 L 20 180 Z" fill="url(#chartAreaGradient)"/>
            {/* Line */}
            <path d="M 20 160 Q 60 140, 100 100 T 180 40" fill="none" stroke="url(#chartLineGradient)" strokeWidth="3"/>
            {/* Points */}
            {[20, 60, 100, 140, 180].map((x, i) => {
              const y = i === 0 ? 160 : i === 1 ? 145 : i === 2 ? 100 : i === 3 ? 70 : 40;
              return (
                <circle key={i} cx={x} cy={y} r="4" fill="#FF6B35"/>
              );
            })}
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                Comece a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FF6B35]">
                  organizar
                </span>
                {' '}suas finanças hoje
              </h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Escolha o plano ideal para você e entre no grupo em minutos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Plano Mensal */}
              <div className="glass-card rounded-[40px] p-10 relative hover:scale-[1.02] transition-all duration-500">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Plano Mensal</h3>
                  <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FF6B35] mb-4">
                    R$ {appConfig.plan_price_monthly}
                  </div>
                  <p className="text-white/50 text-lg">por mês</p>
                </div>

                <ul className="space-y-5 mb-10">
                  {appConfig.plan_features_monthly.map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold transition-all duration-300 border border-white/10 hover:border-white/20"
                  onClick={() => handlePlanClick('month')}
                >
                  Começar Plano Mensal
                </button>
              </div>

              {/* Plano Anual - Featured */}
              <div className="relative">
                {/* Popular badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#FF4D00] to-[#FF6B35] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-orange-500/30">
                    <Star className="w-5 h-5" fill="currentColor" />
                    Mais vantajoso
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#FF4D00] to-[#FF6B35] rounded-[40px] p-10 relative hover:scale-[1.02] transition-all duration-500 shadow-2xl shadow-orange-500/20">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00] to-[#FF6B35] rounded-[40px] blur-2xl opacity-50"></div>

                  <div className="relative z-10">
                    <div className="text-center mb-10 pt-4">
                      <h3 className="text-2xl font-bold text-white mb-6">Plano Anual</h3>
                      <div className="text-6xl md:text-7xl font-black text-white mb-4">
                        R$ {appConfig.plan_price_annual}
                      </div>
                      <p className="text-white/70 text-lg mb-3">por ano</p>
                      <p className="text-white/90 font-bold text-xl">
                        Economize R$ {(parseFloat(appConfig.plan_price_monthly.replace(',', '.')) * 12 - parseFloat(appConfig.plan_price_annual.replace(',', '.'))).toFixed(2).replace('.', ',')}
                      </p>
                    </div>

                    <ul className="space-y-5 mb-10">
                      {appConfig.plan_features_annual.map((feature, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white/90">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className="w-full px-8 py-4 bg-white text-[#FF4D00] rounded-2xl font-bold hover:bg-white/90 transition-all duration-300 shadow-xl"
                      onClick={() => handlePlanClick('year')}
                    >
                      Começar Plano Anual
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="text-center mt-20">
              <p className="text-white/50 mb-6 text-lg">
                {appConfig.company_name} — Seu controle financeiro no WhatsApp
              </p>
              <div className="flex justify-center items-center gap-8 text-sm text-white/40">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF4D00]" />
                  Sem fidelidade
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF4D00]" />
                  Cancele quando quiser
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF4D00]" />
                  Suporte no WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Template1;
