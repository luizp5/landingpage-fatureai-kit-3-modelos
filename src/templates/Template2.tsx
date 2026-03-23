import DynamicHead from "@/components/DynamicHead";
import Footer from "@/components/Footer";
import { getTheme } from "@/config/themes";
import { appConfig } from "@/config/app";
import { ArrowRight, Check, MessageCircle, TrendingUp, Target, Users, BarChart3, Sparkles, Quote, Star, Bot, Send, Wallet, PieChart } from "lucide-react";
import { trackEvent } from "@/lib/facebookPixel";

// Template2 - White/Clean Design - Copy Aspiracional
const Template2 = () => {
  const theme = getTheme("template2");

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
    <div className="min-h-screen bg-white text-gray-900" style={{
      '--primary': theme.primary,
      '--secondary': theme.secondary,
      '--accent': theme.accent,
      '--background': theme.background,
      '--foreground': theme.foreground,
      '--muted': theme.muted
    } as React.CSSProperties}>
      <DynamicHead />

      {/* Hero Section - White/Clean Aspirational */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50/30 to-white overflow-hidden py-16 sm:py-0">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-300 to-orange-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-[15%] right-[10%] w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg opacity-60 animate-float">
          <Wallet className="w-8 h-8 text-white" />
        </div>
        <div className="absolute top-[25%] left-[12%] w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg opacity-50 animate-float-slow" style={{ animationDelay: '0.5s' }}>
          <PieChart className="w-7 h-7 text-white" />
        </div>
        <div className="absolute bottom-[30%] right-[15%] w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-400 rounded-xl flex items-center justify-center shadow-lg opacity-40 animate-float" style={{ animationDelay: '1.5s' }}>
          <TrendingUp className="w-6 h-6 text-white" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-left order-1 lg:order-1">
              {/* Logo */}
              <div className="mb-8">
                <img
                  src={appConfig.logo_url}
                  alt={appConfig.company_name}
                  className="h-14 md:h-16 object-contain"
                />
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.15] tracking-tight">
                Você vive em grupos de WhatsApp
                <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  que tal usar um para suas finanças?
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                Grupo da família? Dos amigos? Do trabalho? Você já está o dia todo em grupos.
                <span className="block mt-3 text-gray-900 font-medium">Agora imagine ter um <span className="text-orange-600 font-semibold">grupo no WhatsApp com IA</span> que organiza suas finanças automaticamente.</span>
                <span className="block mt-2 text-gray-500">Sem planilha. Sem app. Só o WhatsApp que você já usa.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar Minha Transformação
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300 hover:text-orange-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5"
                  onClick={() => {
                    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${appConfig.company_name}.`);
                    window.open(`https://wa.me/${appConfig.support_whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
                  }}
                >
                  Falar com Especialista
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>+10.000 vidas transformadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>100% no WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Right Column - WhatsApp Mockup */}
            <div className="relative order-2 lg:order-2 mt-8 lg:mt-0">
              {/* Phone frame - Same as Template1 with White palette - Responsive */}
              <div className="relative mx-auto w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px]">
                {/* Phone body - White theme */}
                <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 shadow-2xl shadow-gray-400/50">
                  {/* Screen */}
                  <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                    {/* WhatsApp header - Orange/Amber */}
                    <div className="bg-[#1a2d35] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                        <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white text-xs sm:text-sm font-semibold">{appConfig.company_name}</div>
                        <div className="text-white/50 text-[10px] sm:text-xs">Online</div>
                      </div>
                    </div>

                    {/* Chat messages */}
                    <div className="p-3 sm:p-4 space-y-2.5 sm:space-y-3 min-h-[350px] sm:min-h-[400px] bg-white">
                      {/* User message 1 */}
                      <div className="flex justify-end">
                        <div className="bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                          <p className="text-white text-sm">Fala bot, gastei 45 reais no almoço hoje</p>
                          <p className="text-white/50 text-xs mt-1 text-right">14:32</p>
                        </div>
                      </div>

                      {/* Bot response 1 */}
                      <div className="flex justify-start">
                        <div className="bg-[#f0f0f0] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                          <p className="text-gray-800 text-sm">✅ Registrado: Almoço - R$ 45</p>
                          <p className="text-gray-600 text-sm mt-1">Saldo atual: R$ 2.305,00</p>
                          <p className="text-gray-400 text-xs mt-2">14:32 ✓✓</p>
                        </div>
                      </div>

                      {/* User message 2 */}
                      <div className="flex justify-end">
                        <div className="bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                          <p className="text-white text-sm">Me dá um resumo do mês?</p>
                          <p className="text-white/50 text-xs mt-1 text-right">14:35</p>
                        </div>
                      </div>

                      {/* Bot response 2 - Summary */}
                      <div className="flex justify-start">
                        <div className="bg-[#f0f0f0] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                          <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl p-3 border border-orange-500/30">
                            <p className="text-orange-600 text-sm font-bold mb-2">📊 Resumo do Mês</p>
                            <p className="text-gray-700 text-sm">• Entradas: <span className="text-green-600 font-semibold">R$ 5.350,00</span></p>
                            <p className="text-gray-700 text-sm">• Saídas: <span className="text-red-500 font-semibold">R$ 3.045,00</span></p>
                            <p className="text-gray-700 text-sm font-semibold mt-2">Saldo: +R$ 2.305,00</p>
                          </div>
                          <p className="text-gray-400 text-xs mt-2">14:35 ✓✓</p>
                        </div>
                      </div>
                    </div>

                    {/* Input bar */}
                    <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2">
                      <div className="flex-1">
                        <div className="bg-white rounded-full px-4 py-2 border border-gray-200">
                          <p className="text-gray-400 text-sm">Digite uma mensagem</p>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone shine effect */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">+47%</p>
                    <p className="text-sm text-gray-500">Economia média</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Transformação Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6">
              A TRANSFORMAÇÃO
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              De caos financeiro a
              <span className="block mt-2 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                clareza total
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como sua vida financeira muda em apenas 30 dias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-8 relative">
              <div className="absolute -top-4 left-8 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                ANTES
              </div>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-700">Sem saber para onde o dinheiro foi</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-700">Planilhas que você nunca atualiza</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-700">Estresse sempre que chega o fim do mês</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-700">Imprevistos que acabam com o orçamento</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-green-50 border-2 border-green-100 rounded-3xl p-8 relative">
              <div className="absolute -top-4 left-8 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                DEPOIS
              </div>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">Controle total de cada centavo</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">Tudo em um grupo no WhatsApp, sem esforço</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">Relatórios automáticos quando você quiser</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">Reserva de emergência crescendo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-orange-50/50 to-amber-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
              PARA QUEM É
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Feito para quem quer
              <span className="block mt-2 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                crescer de verdade
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Profissionais Ocupados</h3>
              <p className="text-gray-600 leading-relaxed">
                Você trabalha o dia todo e não tem tempo para planilhas complicadas. Quer algo rápido e eficiente.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quem Sonha Grande</h3>
              <p className="text-gray-600 leading-relaxed">
                Você tem metas financeiras — casa própria, viagem, aposentadoria — e precisa organizar para alcançar.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Empreendedores</h3>
              <p className="text-gray-600 leading-relaxed">
                Você precisa separar finanças pessoais e profissionais sem dor de cabeça.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como é na Prática Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6">
              COMO É NA PRÁTICA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Tão simples quanto
              <span className="block mt-2 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                mandar uma mensagem no grupo
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Você entra no grupo do WhatsApp com IA, manda uma mensagem quando ganha ou gasta, e pronto!
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Example 1 */}
            <div className="bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-green-600 font-semibold mb-2">VOCÊ ENVIA</p>
                <p className="text-gray-900 font-medium text-lg mb-4">"Fala bot, gastei 85 reais no mercado hoje"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-orange-600 font-semibold mb-2">{appConfig.company_name.toUpperCase()} RESPONDE</p>
                  <p className="text-gray-600">✅ Registrado: Mercado - R$ 85,00</p>
                  <p className="text-gray-600">📊 Saldo do dia: R$ 145,00 restantes</p>
                  <p className="text-gray-500 text-sm mt-2">🎯 Dica: Você está 15% abaixo da média de gastos desta semana!</p>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-green-600 font-semibold mb-2">VOCÊ ENVIA</p>
                <p className="text-gray-900 font-medium text-lg mb-4">"Me dá um relatório de quanto gastei em restaurante esse mês?"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-orange-600 font-semibold mb-2">{appConfig.company_name.toUpperCase()} RESPONDE</p>
                  <p className="text-gray-600">🍽️ Gastos em Restaurantes: R$ 420,00</p>
                  <p className="text-gray-600">📈 23% acima do mês passado</p>
                  <p className="text-gray-500 text-sm mt-2">💡 Se reduzir para R$ 300, economiza R$ 120/mês = R$ 1.440/ano!</p>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-green-600 font-semibold mb-2">VOCÊ ENVIA</p>
                <p className="text-gray-900 font-medium text-lg mb-4">"Recebi 3.500 do salário"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-orange-600 font-semibold mb-2">{appConfig.company_name.toUpperCase()} RESPONDE</p>
                  <p className="text-gray-600">💰 Salário registrado: R$ 3.500,00</p>
                  <p className="text-gray-600">🎉 Sua renda este mês: R$ 5.200,00</p>
                  <p className="text-gray-500 text-sm mt-2">📊 +18% vs mês anterior • Continue assim!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-orange-50/50 to-amber-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
              PODERES DA IA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Inteligência que
              <span className="block mt-2 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                entende você
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Entende Áudio</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fale em vez de digitar. Envie áudio no grupo e o agente transcreve e registra tudo.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lê Notas Fiscais</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tire foto do cupom fiscal. A IA extrai valor, data e categoria automaticamente.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Entende Gírias</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Paguei a conta de luz", "Gastei os milhõezin no mercado" — ele entende tudo.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Relatórios Instantâneos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Peça um resumo a qualquer momento e receba análises detalhadas em segundos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6">
              DEPOIMENTOS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Histórias reais de
              <span className="block mt-2 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                transformação
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-200" />
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Eu era péssimo com dinheiro. Planilha durava 2 dias. Com o {appConfig.company_name}, em 30 dias tinha minha primeira reserva de emergência. Agora sei exatamente onde está cada centavo."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold">Roberto M.</h5>
                  <p className="text-gray-500 text-sm">Engenheiro de Software</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-200" />
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Tento empreender há 3 anos e nunca conseguia separar PF de PJ. Em 2 meses usando o {appConfig.company_name}, finalmente minha vida financeira está organizada. Meu negócio agradece!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold">Carla S.</h5>
                  <p className="text-gray-500 text-sm">Empresária</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-200" />
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "O melhor é que não precisa abrir outro app. Já estou no WhatsApp o dia todo, é só mandar a mensagem e pronto. Simples, rápido e eficiente."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <div>
                  <h5 className="text-gray-900 font-semibold">Fernando L.</h5>
                  <p className="text-gray-500 text-sm">Médico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-orange-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6">
              INVESTIMENTO
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Escolha seu plano de
              <span className="block mt-2 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                transformação
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Plano Mensal</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">R$ {appConfig.plan_price_monthly}</span>
                </div>
                <p className="text-gray-500">por mês</p>
              </div>

              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_monthly.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => {
                  trackEvent("InitiateCheckout", { planType: "monthly" });
                  handlePlanClick('monthly');
                }}
              >
                Começar Plano Mensal
              </button>
            </div>

            {/* Annual Plan - Recommended */}
            <div className="relative bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-orange-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Mais vantajoso
                </div>
              </div>

              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold text-white mb-4">Plano Anual</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-white">R$ {appConfig.plan_price_annual}</span>
                </div>
                <p className="text-orange-100">por ano</p>
                <p className="text-white font-semibold mt-3">
                  Apenas R$ {(parseFloat(appConfig.plan_price_annual.replace(',', '.')) / 12).toFixed(2).replace('.', ',')} por mês
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {appConfig.plan_features_annual.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full px-6 py-4 bg-white text-orange-600 hover:bg-orange-50 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => {
                  trackEvent("InitiateCheckout", { planType: "annual" });
                  handlePlanClick('annual');
                }}
              >
                Começar Plano Anual
              </button>
            </div>
          </div>

          {/* Trust */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Sem fidelidade
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Cancele quando quiser
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Suporte via WhatsApp
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Sua jornada financeira
              <span className="block mt-2 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                começa agora
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Junte-se a mais de 10.000 pessoas que transformaram sua relação com o dinheiro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Começar Minha Transformação
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300 hover:text-orange-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => {
                  const message = encodeURIComponent(`Olá! Quero saber mais sobre o ${appConfig.company_name}.`);
                  window.open(`https://wa.me/${appConfig.support_whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
                }}
              >
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Template2;
