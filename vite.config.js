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
        host: '0.0.0.0', // écoute sur toutes les interfaces réseau
        port: process.env.PORT ? parseInt(process.env.PORT) : 5173, // Utiliser le port fourni par Render ou 5173 par défaut
        strictPort: true, // Si le port n'est pas disponible, arrêter
    },
    build: {
        outDir: 'dist', // Assurez-vous que le build est généré dans le dossier dist
        rollupOptions: {
            input: {
                main: 'resources/views/index.html', // Assurez-vous que ce chemin est correct
            },
        },
    },
});
