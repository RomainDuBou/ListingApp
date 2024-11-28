import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            ziggy: '/vendor/tightenco/ziggy/dist/vue', // Corrige l'importation de Ziggy pour Vue.js
        },
    },
});
