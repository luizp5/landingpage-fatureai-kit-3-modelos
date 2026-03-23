import { appConfig } from "@/config/app";
import DynamicHead from "@/components/DynamicHead";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <DynamicHead />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Termos de Uso
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            1. Termos
          </h2>
          <p>
            Ao acessar ao site{" "}
            <a
              href="/"
              className="text-primary hover:text-primary/80 transition-colors duration-200"
            >
              {appConfig.company_name}
            </a>
            , concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            2. Uso de Licença
          </h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site {appConfig.company_name}, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          </p>
          <ol className="list-decimal list-inside space-y-2 my-6 ml-4">
            <li>modificar ou copiar os materiais;</li>
            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site {appConfig.company_name};</li>
            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
          </ol>
          <p>
            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por {appConfig.company_name} a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            3. Isenção de responsabilidade
          </h2>
          <ol className="list-decimal list-inside space-y-4 my-6 ml-4">
            <li>
              Os materiais no site da {appConfig.company_name} são fornecidos 'como estão'. {appConfig.company_name} não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </li>
            <li>
              Além disso, o {appConfig.company_name} não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            4. Limitações
          </h2>
          <p>
            Em nenhum caso o {appConfig.company_name} ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em {appConfig.company_name}, mesmo que {appConfig.company_name} ou um representante autorizado da {appConfig.company_name} tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            5. Precisão dos materiais
          </h2>
          <p>
            Os materiais exibidos no site da {appConfig.company_name} podem incluir erros técnicos, tipográficos ou fotográficos. {appConfig.company_name} não garante que qualquer material em seu site seja preciso, completo ou atual. {appConfig.company_name} pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, {appConfig.company_name} não se compromete a atualizar os materiais.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            6. Links
          </h2>
          <p>
            O {appConfig.company_name} não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por {appConfig.company_name} do site. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
            Modificações
          </h3>
          <p>
            O {appConfig.company_name} pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
            Lei aplicável
          </h3>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com as leis do {appConfig.company_name} e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-16 p-8 bg-muted/30 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Entre em Contato
          </h3>
          <p className="text-foreground/80 mb-4">
            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
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

export default TermsOfUse;
