import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Plugin para substituir variáveis no index.html
const htmlEnvPlugin = (env: Record<string, string>) => {
  return {
    name: 'html-env',
    transformIndexHtml(html: string) {
      return html.replace(/%VITE_(\w+)%/g, (match, key) => {
        const envKey = `VITE_${key}`;
        return env[envKey] || match;
      });
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), "");
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    build: {
      // Habilitar cache busting automático com hash nos arquivos
      rollupOptions: {
        output: {
          // Adicionar hash aos chunks para cache busting
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      },
      // Configurações para melhor cache busting
      sourcemap: false,
      minify: 'terser',
    },
    plugins: [
      react(), 
      mode === "development" && componentTagger(),
      htmlEnvPlugin(env)
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      // Explicitly define environment variables for client-side
      "import.meta.env.VITE_COMPANY_NAME": JSON.stringify(env.VITE_COMPANY_NAME),
      "import.meta.env.VITE_PAGE_TITLE": JSON.stringify(env.VITE_PAGE_TITLE),
      "import.meta.env.VITE_PAGE_DESCRIPTION": JSON.stringify(env.VITE_PAGE_DESCRIPTION),
      "import.meta.env.VITE_LOGO_URL": JSON.stringify(env.VITE_LOGO_URL),
      "import.meta.env.VITE_FAVICON_URL": JSON.stringify(env.VITE_FAVICON_URL),
      "import.meta.env.VITE_SUPPORT_PHONE": JSON.stringify(env.VITE_SUPPORT_PHONE),
      "import.meta.env.VITE_SUPPORT_EMAIL": JSON.stringify(env.VITE_SUPPORT_EMAIL),
      "import.meta.env.VITE_SUPPORT_WHATSAPP": JSON.stringify(env.VITE_SUPPORT_WHATSAPP),
      "import.meta.env.VITE_PLAN_PRICE_MONTHLY": JSON.stringify(env.VITE_PLAN_PRICE_MONTHLY),
      "import.meta.env.VITE_PLAN_PRICE_ANNUAL": JSON.stringify(env.VITE_PLAN_PRICE_ANNUAL),
      "import.meta.env.VITE_MONTHLY_PLAN_URL": JSON.stringify(env.VITE_MONTHLY_PLAN_URL),
      "import.meta.env.VITE_ANNUAL_PLAN_URL": JSON.stringify(env.VITE_ANNUAL_PLAN_URL),
      "import.meta.env.VITE_TEMPLATE_VARIANT": JSON.stringify(env.VITE_TEMPLATE_VARIANT),
      "import.meta.env.VITE_WHATSAPP_PREVIEW_URL": JSON.stringify(env.VITE_WHATSAPP_PREVIEW_URL),
      "import.meta.env.VITE_LOGO_WIDTH": JSON.stringify(env.VITE_LOGO_WIDTH),
      "import.meta.env.VITE_LOGO_HEIGHT": JSON.stringify(env.VITE_LOGO_HEIGHT),
      "import.meta.env.VITE_FAVICON_SIZE": JSON.stringify(env.VITE_FAVICON_SIZE),
      "import.meta.env.VITE_WHATSAPP_PREVIEW_WIDTH": JSON.stringify(env.VITE_WHATSAPP_PREVIEW_WIDTH),
      "import.meta.env.VITE_WHATSAPP_PREVIEW_HEIGHT": JSON.stringify(env.VITE_WHATSAPP_PREVIEW_HEIGHT),
      "import.meta.env.VITE_PIXEL_FACEBOOK": JSON.stringify(env.VITE_PIXEL_FACEBOOK),
      "import.meta.env.VITE_PIXEL_FACEBOOK_REQUIRE_CONSENT": JSON.stringify(env.VITE_PIXEL_FACEBOOK_REQUIRE_CONSENT),
      "import.meta.env.VITE_PIXEL_FACEBOOK_ENABLE_DEV": JSON.stringify(env.VITE_PIXEL_FACEBOOK_ENABLE_DEV),
      "import.meta.env.GTM_ID": JSON.stringify(env.GTM_ID),
      "import.meta.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
      "import.meta.env.GTM_ENABLE_DEV": JSON.stringify(env.GTM_ENABLE_DEV),
    },
  };
});
