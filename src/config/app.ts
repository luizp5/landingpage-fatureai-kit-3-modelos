// Dynamic configuration for the finance app landing page
// Now using environment variables with fallbacks for backward compatibility

export interface AppConfig {
  company_name: string;
  page_title: string;
  page_description: string;
  logo_url: string;
  favicon_url: string;
  support_phone: string;
  support_email: string;
  support_whatsapp: string;
  plan_price_monthly: string;
  plan_price_annual: string;
  plan_features_monthly: string[];
  plan_features_annual: string[];
  monthly_plan_url: string;
  annual_plan_url: string;
  template_variant: string;

  // URLs das Imagens
  whatsapp_preview_url: string;

  // Configurações de Imagem
  logo_width: number;
  logo_height: number;
  favicon_size: number;
  whatsapp_preview_width: number;
  whatsapp_preview_height: number;
}

// Helper function to parse comma-separated string to array
const parseFeatures = (envVar: string | undefined, fallback: string[]): string[] => {
  if (!envVar) return fallback;
  return envVar.split(",").map(feature => feature.trim());
};

export const appConfig: AppConfig = {
  company_name: import.meta.env.VITE_COMPANY_NAME || "Poupe Já AI",
  page_title: import.meta.env.VITE_PAGE_TITLE || "Poupe Já AI - Controle Total das Suas Finanças",
  page_description: import.meta.env.VITE_PAGE_DESCRIPTION || "Gerencie receitas e despesas pelo App ou WhatsApp. Dashboard completo, metas financeiras e relatórios detalhados. Comece grátis!",
  logo_url: import.meta.env.VITE_LOGO_URL || "https://via.placeholder.com/200x60/4F46E5/FFFFFF?text=LOGO",
  favicon_url: import.meta.env.VITE_FAVICON_URL || "https://via.placeholder.com/32x32/4F46E5/FFFFFF?text=F",
  support_phone: import.meta.env.VITE_SUPPORT_PHONE || "+55 (11) 99999-9999",
  support_email: import.meta.env.VITE_SUPPORT_EMAIL || "suporte@poupeja.com.br",
  support_whatsapp: import.meta.env.VITE_SUPPORT_WHATSAPP || "+5511999999999",
  plan_price_monthly: import.meta.env.VITE_PLAN_PRICE_MONTHLY || "19,90",
  plan_price_annual: import.meta.env.VITE_PLAN_PRICE_ANNUAL || "177,00",
  plan_features_monthly: parseFeatures(
    import.meta.env.VITE_PLAN_FEATURES_MONTHLY,
    [
      "Mensagens por texto",
      "Áudio e imagem",
      "Limite por categoria",
      "Relatórios de gastos",
      "Sem fidelidade"
    ]
  ),
  plan_features_annual: parseFeatures(
    import.meta.env.VITE_PLAN_FEATURES_ANNUAL,
    [
      "Mensagens por texto",
      "Áudio e imagem",
      "Limite por categoria",
      "Relatórios completos",
      "Metas financeiras",
      "Suporte prioritário"
    ]
  ),
  monthly_plan_url: import.meta.env.VITE_MONTHLY_PLAN_URL || "",
  annual_plan_url: import.meta.env.VITE_ANNUAL_PLAN_URL || "",
  template_variant: import.meta.env.VITE_TEMPLATE_VARIANT || "default",

  // URLs das Imagens
  whatsapp_preview_url: import.meta.env.VITE_WHATSAPP_PREVIEW_URL || "https://via.placeholder.com/1200x630/4F46E5/FFFFFF?text=PREVIEW",

  // Configurações de Imagem
  logo_width: parseInt(import.meta.env.VITE_LOGO_WIDTH || "200"),
  logo_height: parseInt(import.meta.env.VITE_LOGO_HEIGHT || "60"),
  favicon_size: parseInt(import.meta.env.VITE_FAVICON_SIZE || "32"),
  whatsapp_preview_width: parseInt(import.meta.env.VITE_WHATSAPP_PREVIEW_WIDTH || "1200"),
  whatsapp_preview_height: parseInt(import.meta.env.VITE_WHATSAPP_PREVIEW_HEIGHT || "630"),
};
