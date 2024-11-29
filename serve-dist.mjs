import { exec } from 'child_process';

let port = process.env.PORT;

if (!port) {
  console.error("La variable d'environnement PORT n'est pas définie par Render.");
  process.exit(1);
}

console.log(`Valeur actuelle de PORT : ${port}`);
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
