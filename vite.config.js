import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/Uppgift-3-FB-W/",
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sass: resolve(__dirname, "src/SASS.html"),
        animering: resolve(__dirname, "src/Animering.html"),
        diagram: resolve(__dirname, "src/diagram.html"),
        karta: resolve(__dirname, "src/karta.html"),
      },
    },
  },
});
