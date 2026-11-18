# Gerenciador de Tarefas (TDE-16)

Esta é uma aplicação front-end desenvolvida em React para gerenciamento de tarefas (CRUD). O projeto consolida o uso de Context API para gerenciamento de estado global e React Router DOM para navegação. Uma API REST fake é simulada utilizando o `json-server`.

## 🛠️ Tecnologias Utilizadas
* **React** (via Vite)
* **React Router DOM** (Navegação dinâmica)
* **Context API** (Gerenciamento de estado global)
* **JSON Server** (Simulação de banco de dados/API)

## ⚙️ Funcionalidades
- Listagem de tarefas com status (Pendente/Concluído).
- Visualização de detalhes da tarefa em rota dedicada (`/task/:id`).
- Criação de novas tarefas com validação simples de formulário.
- Edição de título e descrição de tarefas existentes.
- Exclusão de tarefas.
- Alternância rápida do status da tarefa.
- Gerenciamento eficiente de requisições: os dados são buscados na API apenas uma vez na montagem da aplicação.

## 🚀 Como rodar o projeto localmente

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

### 2. Instalação
Clone este repositório e acesse a pasta do projeto:

> git clone https://github.com/raullxb/af-tde16.git
> cd af-tde16

Em seguida, instale as dependências:

> npm install

### 3. Executando a Aplicação
Para que o projeto funcione corretamente, você precisará rodar o servidor da API (json-server) e o servidor do React (Vite) **ao mesmo tempo, em terminais separados**.

**Terminal 1 (Iniciando a API falsa):**
> npx json-server --watch db.json --port 3001

**Terminal 2 (Iniciando o Front-end):**
> npm run dev

Após rodar os dois comandos, acesse a aplicação no seu navegador (geralmente em `http://localhost:5173`).
