# 🛡️ Task Manager API (Back-end)

API RESTful robusta desenvolvida para gerenciamento de tarefas com suporte a autenticação de usuários, criptografia de senhas e validação rigorosa de dados.

> 🚀 Projeto construído para compor meu portfólio como Desenvolvedor Full Stack / Back-end.

---

## 🛠️ Tecnologias Utilizadas

* 🟢 **Node.js** & **Express** — Ambiente de execução e framework web.
* 🔷 **Prisma ORM** — Mapeamento e manipulação do banco de dados relacional.
* 🔒 **JSON Web Token (JWT)** — Autenticação e proteção de rotas privadas.
* 🔑 **Bcrypt** — Criptografia e segurança de senhas.
* 🛡️ **Zod** — Schema validation de dados de entrada com tratamento personalizado de erros (`.flatten()`).

---

## ✨ Principais Funcionalidades

- [x] **Cadastro e Login de Usuários** com criptografia de senha (`bcrypt`).
- [x] **Autenticação de Rotas** via cabeçalho HTTP usando `JWT`.
- [x] **Validação de Entrada (Zod)** prevenindo falhas de execução e garantindo integridade dos dados.
- [x] **CRUD Completo de Tarefas** (Criar, Listar, Atualizar e Deletar).
- [x] **Vínculo de Dados**: cada usuário possui e gerencia apenas as suas próprias tarefas.

---

## 📌 Rotas da API

| Método | Rota | Descrição | Protegida (JWT)? |
| :--- | :--- | :--- | :---: |
| `POST` | `/login/cadastro` | Cadastra um novo usuário | ❌ |
| `POST` | `/login` | Autentica o usuário e retorna o Token | ❌ |
| `GET` | `/lista` | Lista as tarefas do usuário autenticado | ✅ |
| `POST` | `/tarefas` | Cria uma nova tarefa | ✅ |
| `PUT` | `/atualizartarefas/:id` | Atualiza o nome de uma tarefa existente | ✅ |
| `DELETE` | `/tarefa/:id` | Remove uma tarefa | ✅ |

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos
* Node.js instalado (versão 18 ou superior)
* Git instalado

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git)
Acesse a pasta do projeto:

Bash
cd NOME-DO-REPOSITORIO
Instale as dependências:

Bash
npm install
Configure as Variáveis de Ambiente:
Crie um arquivo .env na raiz do projeto e configure suas chaves:

Snippet de código
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua_chave_secreta_aqui"
PORT=3000
Execute as Migrações do Banco de Dados:

Bash
npx prisma migrate dev
Inicie o Servidor:

Bash
npm start
# ou npm run dev
O servidor estará rodando em http://localhost:3000.

👨‍💻 Autor
Desenvolvedor: Hudson Maximiano