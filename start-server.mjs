import { createServer } from 'vite';

const port = process.env.PORT || 10000; // Utiliser le port attribué par Render ou 10000 par défaut

try {
  // Créer un serveur Vite
  createServer({
    server: {
      port: parseInt(port),  // Prendre en compte le port fourni
      host: '0.0.0.0',       // Permettre l'accès depuis toutes les interfaces
    }
  }).listen(port, () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
  });
} catch (error) {
  console.error('Erreur lors du démarrage du serveur :', error);
  process.exit(1); // Quitter avec un code d'erreur explicite
}
