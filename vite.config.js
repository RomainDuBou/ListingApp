import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ["resources/js/app.js"],
            refresh: true,
        }),
    ],
    server: {
        host: "0.0.0.0", // Ecouter sur toutes les interfaces réseau
        port: parseInt(process.env.PORT) || 5173, // Utiliser le port assigné par Render, ou un port par défaut (ex. 5173) en local
        strictPort: true, // Si le port est déjà utilisé, arrêter au lieu de chercher un autre port
    },
});
