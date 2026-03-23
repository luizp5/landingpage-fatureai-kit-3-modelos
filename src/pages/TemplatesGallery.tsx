import { Link } from "react-router-dom";
import { Eye, Sparkles } from "lucide-react";

const TemplatesGallery = () => {
  const templates = [
    {
      id: "template1",
      name: "Template 1",
      title: "Bold Financial Drama",
      description: "Copy focada em dor - \"Seu dinheiro some todo mês\". Design escuro dramático com gradientes laranja/vermelho.",
      color: "#FF6B35",
      gradient: "from-[#FF4D00] via-[#FF6B35] to-[#FF4D00]",
      tag: "Ângulo Dor",
      tagColor: "bg-red-500"
    },
    {
      id: "template2",
      name: "Template 2",
      title: "White & Clean",
      description: "Copy aspiracional - \"Imagine saber exatamente onde está cada centavo\". Design branco limpo com laranja/âmbar.",
      color: "#F59E0B",
      gradient: "from-orange-500 to-amber-500",
      tag: "Aspiracional",
      tagColor: "bg-orange-500"
    },
    {
      id: "template3",
      name: "Template 3",
      title: "Dark Premium Neon",
      description: "Copy educativo - \"Antes de assinar, entenda como funciona\". Design escuro premium com efeitos ciano/roxo.",
      color: "#00D9FF",
      gradient: "from-cyan-500 via-purple-500 to-pink-500",
      tag: "Educativo",
      tagColor: "bg-cyan-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            🎨 Galeria de Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore os 3 templates disponíveis. Cada um com copy única, identidade visual própria e 100% configurável via .env
          </p>
        </div>

        {/* Grid de Templates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {templates.map((template, index) => (
            <Link
              key={template.id}
              to={`/${template.id}`}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Color Header */}
              <div
                className={`h-40 bg-gradient-to-br ${template.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-sm font-bold">
                  {template.name}
                </div>
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-white text-xs font-bold ${template.tagColor}`}>
                    {template.tag}
                  </div>
                </div>
                {/* Decorative icon */}
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-white/80" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {template.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {template.description}
                </p>

                {/* Color Indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl shadow-md border-2 border-white/50"
                    style={{ backgroundColor: template.color }}
                  ></div>
                  <span className="text-sm text-gray-500 font-mono font-medium">
                    {template.color}
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">
                    ✨ Copy Única
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">
                    🎨 Design Exclusivo
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">
                    ⚙️ 100% Configurável
                  </div>
                </div>

                {/* Button */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Clique para visualizar
                  </span>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all">
                    <Eye className="w-5 h-5" />
                    Visualizar
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            Como usar em produção
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Para definir o template que será exibido no site, edite o arquivo{" "}
            <code className="bg-white px-3 py-1.5 rounded-lg font-mono text-sm border border-gray-200 shadow-sm">
              .env
            </code>{" "}
            e configure a variável:
          </p>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <code className="text-sm text-gray-800">
              VITE_TEMPLATE_VARIANT=template1  {/* ou template2, template3 */}
            </code>
          </div>
        </div>

        {/* Cards de Copy */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-lg mb-2">🔥 Template1</h4>
            <p className="text-sm text-white/90">"Seu dinheiro some todo mês"</p>
            <p className="text-xs text-white/70 mt-2">Copy: Dor</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-lg mb-2">✨ Template2</h4>
            <p className="text-sm text-white/90">"Imagine saber onde está cada centavo"</p>
            <p className="text-xs text-white/70 mt-2">Copy: Aspiracional</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-purple-500 text-white rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-lg mb-2">⚡ Template3</h4>
            <p className="text-sm text-white/90">"Entenda como funciona antes de assinar"</p>
            <p className="text-xs text-white/70 mt-2">Copy: Educativo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesGallery;
