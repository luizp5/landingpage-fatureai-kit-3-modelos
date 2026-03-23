import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empreendedora",
    content: "O Poupe Já AI mudou completamente como eu vejo minhas finanças. Consegui economizar 40% mais em apenas 3 meses!",
    avatar: "MS",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Desenvolvedor",
    content: "A integração com WhatsApp é fantástica. Registro meus gastos na hora, sem complicação. Recomendo muito!",
    avatar: "JS", 
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Professora",
    content: "Finalmente consigo acompanhar minhas metas financeiras. O dashboard é muito intuitivo e os relatórios são incríveis.",
    avatar: "AC",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">
            O que nossos usuários dizem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Histórias reais de pessoas que transformaram suas vidas financeiras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-10 shadow-md hover:shadow-xl transition-all duration-300 border border-border/40 hover:border-primary/20 hover:-translate-y-1"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" strokeWidth={0} />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-card-foreground mb-8 leading-relaxed text-[15px]">
                "{testimonial.content}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-base">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground tracking-tight">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;