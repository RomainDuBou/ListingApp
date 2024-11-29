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
    build: {
        outDir: 'public/build', // Le dossier de sortie pour les fichiers générés
        manifest: true, // Crée un manifest.json pour l'intégration Laravel-Vite
        rollupOptions: {
            // Pour éviter les conflits de nommage et permettre à Laravel de trouver les bons fichiers
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
                chunkFileNames: 'assets/[name].[hash].js',
                entryFileNames: 'assets/[name].[hash].js',
            },
        },
    },
    server: {
        host: '0.0.0.0', // Permet d'exposer le serveur localement pour le développement
        port: 5173, // Port local pour le développement (modifiable selon vos préférences)
    },
});
