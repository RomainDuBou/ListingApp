import { exec } from 'child_process';

const port = process.env.PORT || 10000;

if (!process.env.PORT) {
  console.error("La variable d'environnement PORT n'est pas définie. Utilisation du port par défaut : 10000");
} else {
  console.log(`Valeur actuelle de PORT fournie par Render : ${process.env.PORT}`);
}

const command = `npx serve -s dist -l ${port}`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`Erreur lors du lancement du serveur : ${err}`);
    process.exit(1);
  } else {
    console.log(stdout);
    if (stderr) console.error(stderr);
  }
});
