import { defineConfig } from "vite";
import { resolve } from "path";

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
      },
    },
  },
});
