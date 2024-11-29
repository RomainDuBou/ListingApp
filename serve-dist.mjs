import { exec } from 'child_process';

const port = process.env.PORT || 10000; // Utilise la variable PORT de l'environnement ou 10000 par défaut
const command = `npx serve -s dist -l ${port}`;

console.log(`Lancement du serveur sur le port : ${port}`);

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`Erreur lors du lancement du serveur : ${err}`);
    process.exit(1);
  } else {
    console.log(stdout);
    if (stderr) console.error(stderr);
  }
});