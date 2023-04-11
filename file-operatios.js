// file-operations.js

const fs = require('fs');

// Créer le fichier welcome.txt avec le contenu "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt créé avec succès!');
});

// Lire et afficher les données du fichier hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenu de hello.txt:');
  console.log(data);
});
