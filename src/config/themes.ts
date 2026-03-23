// Sistema de temas para diferentes templates
export interface ThemeConfig {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  heroGradient: string;
  buttonPrimary: string;
  buttonSecondary: string;
  cardBackground: string;
  borderColor: string;
}

export const themes: Record<string, ThemeConfig> = {
  template1: {
    name: "Azul Profissional",
    primary: "#2563eb", // blue-600
    secondary: "#1d4ed8", // blue-700
    accent: "#3b82f6", // blue-500
    background: "#ffffff",
    foreground: "#1f2937",
    muted: "#f8fafc",
    heroGradient: "from-blue-600 via-blue-700 to-blue-800",
    buttonPrimary: "bg-blue-600 hover:bg-blue-700",
    buttonSecondary: "bg-white text-blue-600 border-blue-600 hover:bg-blue-50",
    cardBackground: "bg-white",
    borderColor: "border-blue-200"
  },
  template2: {
    name: "Emerald Luxury",
    primary: "#10b981", // emerald-500 - vibrant
    secondary: "#059669", // emerald-600 - rich
    accent: "#34d399", // emerald-400 - bright
    background: "#ffffff",
    foreground: "#111827",
    muted: "#ecfdf5",
    heroGradient: "from-emerald-500 via-emerald-600 to-teal-600",
    buttonPrimary: "bg-emerald-500 hover:bg-emerald-600",
    buttonSecondary: "bg-white text-emerald-600 border-emerald-400 hover:bg-emerald-50",
    cardBackground: "bg-white",
    borderColor: "border-emerald-300"
  },
  template3: {
    name: "Dark Premium",
    primary: "#00D9FF", // cyan-400
    secondary: "#A855F7", // purple-500
    accent: "#EC4899", // pink-500
    background: "#0a0a0f",
    foreground: "#ffffff",
    muted: "#0f0f1a",
    heroGradient: "from-cyan-500 via-purple-500 to-pink-500",
    buttonPrimary: "bg-cyan-500 hover:bg-cyan-400 text-white",
    buttonSecondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
    cardBackground: "bg-white/5",
    borderColor: "border-white/10"
  }
};

export const getTheme = (templateVariant: string): ThemeConfig => {
  return themes[templateVariant] || themes.template1;
};
