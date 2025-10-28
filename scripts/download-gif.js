const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://raw.githubusercontent.com/Ninzinhu/Ninzinhu/main/kenshinhimura.gif';
const dest = path.join(__dirname, '../public/assets/kenshinhimura.gif');

const file = fs.createWriteStream(dest);

https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('GIF baixado com sucesso para public/assets/kenshinhimura.gif');
  });
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error('Erro ao baixar GIF:', err.message);
});

