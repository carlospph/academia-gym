# 📝 Checklist: Projeto Blog Fullstack (Vite + Express + MongoDB)

## 1. 🏗️ Setup Inicial
- [ ] Inicializar repositório Git.
- [ ] Criar estrutura de pastas: `/server` e `/client`.
- [ ] **Backend:** `npm init -y` e instalar (express, mongoose, cors, dotenv, jsonwebtoken, bcrypt).
- [ ] **Frontend:** `npm create vite@latest client -- --template react` e instalar (axios, react-router-dom).

## 2. 🗄️ Backend (Express + MongoDB)
- [ ] **Conexão:** Configurar `database.js` com Mongoose e variáveis de ambiente (.env).
- [ ] **Schemas:**
    - [ ] Criar `models/Post.js` (title, content, slug, createdAt).
    - [ ] Criar `models/User.js` (username, password).
- [ ] **Rotas Públicas:**
    - [ ] `GET /posts` (Listar todos).
    - [ ] `GET /posts/:id` (Ver post único).
    - [ ] `GET /posts/search?q=...` (Lógica de busca com $regex).
- [ ] **Segurança (JWT):**
    - [ ] Criar rota `POST /login`.
    - [ ] Criar middleware `auth.js` para verificar o Token.
- [ ] **Rotas Privadas (CRUD Admin):**
    - [ ] `POST /posts` (Criar notícia - Protegida).
    - [ ] `PUT /posts/:id` (Editar notícia - Protegida).
    - [ ] `DELETE /posts/:id` (Excluir notícia - Protegida).

## 3. 💻 Frontend (Vite + React)
- [ ] **Estrutura Base:**
    - [ ] Configurar `BrowserRouter` e Rotas principais.
    - [ ] Criar componentes globais (Navbar, Footer, SearchBar).
- [ ] **Consumo de Dados:**
    - [ ] Criar serviço Axios para chamadas à API.
    - [ ] Implementar `useState` e `useEffect` para carregar posts na Home.
- [ ] **Funcionalidade de Busca:**
    - [ ] Ligar o input da SearchBar com o estado e disparar busca na API.

## 4. 🔐 Área do Gerente (Admin)
- [ ] **Autenticação:**
    - [ ] Criar `AuthContext.jsx` para gerenciar o estado global de login.
    - [ ] Criar página de Login (armazenar Token no localStorage).
- [ ] **Dashboard Admin:**
    - [ ] Criar componente de "Rota Protegida".
    - [ ] Tela de listagem de posts para o gerente.
    - [ ] Formulário de criação/edição com `onChange` e `onSubmit`.
    - [ ] Botão de Excluir com confirmação (`window.confirm`).

## 🚀 5. Finalização
- [ ] Testar todas as rotas no Postman ou Insomnia.
- [ ] Revisar se o Gerente consegue fazer tudo e o Visitante apenas ler.
- [ ] Deploy do Banco (Atlas), API (Render/Railway) e Client (Vercel/Netlify).