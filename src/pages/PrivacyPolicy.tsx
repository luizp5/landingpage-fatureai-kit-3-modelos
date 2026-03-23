import { appConfig } from "@/config/app";
import DynamicHead from "@/components/DynamicHead";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <DynamicHead />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Política de Privacidade
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
          <p>
            A sua privacidade é importante para nós. É política do {appConfig.company_name} respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site{" "}
            <a
              href="/"
              className="text-primary hover:text-primary/80 transition-colors duration-200"
            >
              {appConfig.company_name}
            </a>
            , e outros sites que possuímos e operamos.
          </p>

          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>

          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>

          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>

          <p>
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas{" "}
            <a 
              href="https://politicaprivacidade.com/" 
              className="text-primary hover:text-primary/80 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              políticas de privacidade
            </a>
            .
          </p>

          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>

          <p>
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-8">
            <ul className="space-y-4">
              <li>
                O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
              </li>
              <li>
                Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
              </li>
              <li>
                Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
              </li>
              <li>
                Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">
            Compromisso do Usuário
          </h3>

          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o {appConfig.company_name} oferece no site e com caráter enunciativo, mas não limitativo:
          </p>

          <ul className="space-y-3 my-6">
            <li>
              <strong>A)</strong> Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
            </li>
            <li>
              <strong>B)</strong> Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
            </li>
            <li>
              <strong>C)</strong> Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do {appConfig.company_name}, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">
            Mais informações
          </h3>

          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg my-8">
            <p className="text-sm text-foreground/70">
              Esta política é efetiva a partir de 11 de Setembro de 2025 18:12
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 p-8 bg-muted/30 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Entre em Contato
          </h3>
          <p className="text-foreground/80 mb-4">
            Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:
          </p>
          <div className="space-y-2 text-foreground/80">
            <p>
              <strong>Email:</strong>{" "}
              <a 
                href={`mailto:${appConfig.support_email}`}
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                {appConfig.support_email}
              </a>
            </p>
            <p>
              <strong>Telefone:</strong>{" "}
              <a 
                href={`tel:${appConfig.support_phone}`}
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                {appConfig.support_phone}
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a 
                href={`https://wa.me/${appConfig.support_whatsapp.replace(/\D/g, '')}`}
                className="text-primary hover:text-primary/80 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {appConfig.support_phone}
              </a>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
             Voltar para o Início
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
