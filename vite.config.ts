import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [solidPlugin(), imagetools()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
