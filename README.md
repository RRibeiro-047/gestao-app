## 📋 Visão Geral

O Gestão de Custos é uma aplicação web desenvolvida para auxiliar no controle e gerenciamento de despesas pessoais ou empresariais. Com uma interface intuitiva e responsiva, os usuários podem cadastrar centros de custo, registrar despesas e visualizar relatórios detalhados sobre seus gastos.

### ✨ Funcionalidades Principais

- 📊 Dashboard interativo com gráficos de distribuição de gastos
- 🏷️ Cadastro e gerenciamento de centros de custo
- 💸 Registro detalhado de despesas
- 📅 Filtragem por período (mensal)
- 📱 Design responsivo que funciona em qualquer dispositivo


## 🛠️ Tecnologias Utilizadas

### Frontend
- **Angular 16+** - Framework para construção da interface do usuário
- **TypeScript** - Linguagem tipada que compila para JavaScript
- **Chart.js** - Biblioteca para criação de gráficos interativos
- **ng2-charts** - Componentes Angular para Chart.js
- **Font Awesome** - Ícones premium
- **SCSS** - Pré-processador CSS para estilização avançada
- **Angular Material** - Componentes de UI seguindo o Material Design

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **TypeScript** - Tipagem estática para o backend
- **CORS** - Middleware para requisições entre domínios
- **UUID** - Geração de IDs únicos

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm (gerenciador de pacotes) ou Yarn
- Angular CLI (para desenvolvimento)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/RRibeiro-047/gestao-app
   cd gestao-app
   ```

2. **Instale as dependências do frontend**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Instale as dependências do backend**
   ```bash
   cd backend
   npm install
   # ou
   yarn install
   cd ..
   ```

### Configuração

O projeto já vem com configurações padrão, mas você pode personalizar:
- Porta do servidor backend: Edite `backend/serve.ts`
- URL da API: Atualize em `src/app/services/cost.service.ts`

### Executando a Aplicação

1. **Inicie o servidor backend**
   ```bash
   cd backend
   npm run dev
   # ou
   yarn dev
   ```

2. **Em outro terminal, inicie o servidor de desenvolvimento do Angular**
   ```bash
   ng serve
   # ou
   npm start
   ```

3. **Acesse a aplicação**
   Abra seu navegador e acesse: [http://localhost:4200](http://localhost:4200)
   Deploy: https://gestao-app-8gho.onrender.com


## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
