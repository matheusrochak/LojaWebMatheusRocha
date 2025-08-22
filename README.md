# 🛒 LojaWebMatheusRocha

Projeto desenvolvido em **TypeScript**, com o objetivo de criar um **CRUD completo para um sistema de vendas**.  
A aplicação simula operações essenciais de cadastro, atualização, exclusão e listagem de **usuários** e **produtos**.

---

## ⚙️ Tecnologias Utilizadas
- **TypeScript** → Linguagem principal para maior segurança e tipagem estática  
- **Node.js** → Ambiente de execução  
- **Express.js** (se estiver usando) → Framework para criação de rotas REST  
- **Banco de Dados** (ex: SQLite, PostgreSQL ou MongoDB) → Persistência de dados *(especificar o usado)*  

---

## 📌 Funcionalidades

### 👤 Usuários
- ➕ **Cadastro de usuário**  
- ♻️ **Atualização de usuário**  
- ❌ **Exclusão de usuário**  
- 📋 **Listagem de usuários**

### 📦 Produtos
- ➕ **Cadastro de produto**  
- ♻️ **Atualização de produto**  
- ❌ **Exclusão de produto**  
- 📋 **Listagem de produtos**

---

## 🚀 Como Executar o Projeto

```bash
# Clone este repositório
git clone https://github.com/matheus-rochak/LojaWebMatheusRocha.git

# Acesse a pasta do projeto
cd LojaWebMatheusRocha

# Instale as dependências
npm install

# Compile o TypeScript
npx tsc

# Execute a aplicação
npm start

LojaWebMatheusRocha/
 ├── src/
 │    ├── controllers/    # Lógica de controle de usuários e produtos
 │    ├── models/         # Modelos/entidades do sistema
 │    ├── routes/         # Definição das rotas de API
 │    └── index.ts        # Arquivo principal
 ├── package.json
 ├── tsconfig.json
 └── README.md
