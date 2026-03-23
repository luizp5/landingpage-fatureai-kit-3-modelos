import { appConfig } from "@/config/app";
import Template1 from "@/templates/Template1";
import Template2 from "@/templates/Template2";
import Template3 from "@/templates/Template3";

// Seletor de templates baseado na configuração
const TemplateSelector = () => {
  const { template_variant } = appConfig;

  switch (template_variant.toLowerCase()) {
    case "template1":
      return <Template1 />;
    case "template2":
      return <Template2 />;
    case "template3":
      return <Template3 />;
    default:
      return <Template1 />; // Fallback para template1
  }
};

export default TemplateSelector;
