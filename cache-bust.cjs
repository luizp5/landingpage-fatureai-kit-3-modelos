const fs = require('fs');
const path = require('path');

const timestamp = Date.now();
const version = new Date().toISOString().slice(0, 19).replace(/:/g, '-');

console.log('Gerando cache bust para versao:', version);

const versionInfo = {
  version: version,
  timestamp: timestamp,
  buildDate: new Date().toISOString(),
  cacheBreaker: Math.random().toString(36).substring(7),
  note: 'Este arquivo e atualizado automaticamente a cada build para forcar invalidacao de cache'
};

fs.writeFileSync(
  path.join(__dirname, 'public', 'version.json'),
  JSON.stringify(versionInfo, null, 2)
);

console.log('Arquivo version.json criado em public/');
console.log('Conteudo:', versionInfo);