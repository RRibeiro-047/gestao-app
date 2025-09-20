const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Instala as dependências
console.log('Instalando dependências...');
execSync('npm install', { stdio: 'inherit' });

// Executa o build do Angular
console.log('Executando build de produção...');
execSync('npm run build -- --configuration=production', { stdio: 'inherit' });

// Move os arquivos para a pasta de saída correta
const sourceDir = path.join(__dirname, 'dist/gestao-app/browser');
const targetDir = path.join(__dirname, '.vercel/output/static');

// Cria o diretório de saída se não existir
if (!fs.existsSync(path.dirname(targetDir))) {
  fs.mkdirSync(path.dirname(targetDir), { recursive: true });
}

// Move os arquivos
fs.renameSync(sourceDir, targetDir);

console.log('Build concluído com sucesso!');
