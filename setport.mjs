import { writeFile } from 'fs/promises';

const port = process.env.PORT || 10000; // Utilise le port attribué par Render ou 10000 par défaut
await writeFile('port.txt', port, 'utf8');
console.log(`Port value written to port.txt: ${port}`);
