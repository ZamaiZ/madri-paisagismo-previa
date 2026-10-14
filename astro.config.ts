import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://zamaiz.github.io",
  base: "/madri-paisagismo-previa",
  output: "static",
  devToolbar: { enabled: false },
  integrations: [icon()],
  vite: {
    server: {
      allowedHosts: ["marleen-interthronging-synergistically.ngrok-free.dev"],
    },
    plugins: [tailwindcss()],
  },
});
