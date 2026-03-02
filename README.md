# 🏷️ Portfólio Profissional - Allan Mateus 👨‍💻

> [!NOTE]
> Portfólio profissional de um Engenheiro de Software especializado em desenvolvimento backend com Java/Spring Boot e C#/.NET. Este projeto demonstra minhas habilidades técnicas e experiência em sistemas de alta performance e criticidade.

---

## 🚧 Status do Projeto

![React](https://img.shields.io/badge/React-18-007ec6?style=for-the-badge&logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-5-007ec6?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-4-007ec6?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Java](https://img.shields.io/badge/Java-17-007ec6?style=for-the-badge&logo=openjdk&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-3-007ec6?style=for-the-badge&logo=springboot&logoColor=white)

---

## 📚 Índice
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
- [Personalização](#-personalização)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Autores](#-autores)

---

## 📝 Sobre o Projeto

Portfólio profissional desenvolvido para apresentar minha trajetória como **Engenheiro de Software** com foco em:

- **Backend Development:** Java, Spring Boot, C#, .NET
- **Banco de Dados:** SQL, PLSQL, Oracle, PostgreSQL
- **Boas Práticas:** SOLID, Design Patterns, Clean Architecture
- **Metodologias:** Kanban, Scrum, CI/CD

---

## ✨ Funcionalidades Principais
As funcionalidades foram divididas em seções acessíveis por um menu de navegação responsivo:

- 🏠 **Home:** Apresentação profissional com headline e call-to-action.
- 👨‍💻 **Sobre Mim:** Bio bilíngue (Português/Inglês) com competências técnicas detalhadas.
- 🚀 **Projetos:** Portfólio de projetos com tecnologias utilizadas e links para repositórios.
- 💼 **Experiências:** Histórico profissional detalhado (dti digital, Prodemge, Líder Aviação).
- 📨 **Contato:** Integração de formulário funcional (via EmailJS) e links rápidos para LinkedIn e GitHub.
- 🌙 **Tema Automático:** Detecção automática do tema do sistema (dark/light) com opção de alternância manual.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end
* **Framework/Biblioteca:** React v18
* **Build Tool:** Vite v5
* **Estilização:** Tailwind CSS v4
* **Roteamento:** React Router Dom v7
* **Ícones:** Lucide React
* **Integração de E-mail:** EmailJS

### 🖥️ Back-end (API de Suporte)
* **Linguagem:** Java 17 (JDK)
* **Framework:** Spring Boot 3.x
* **Build Tool:** Maven

### ⚙️ Infraestrutura & Deploy
* **Hospedagem Front-end:** Vercel
* **Controle de Versão:** Git / GitHub

---

## 🏗 Arquitetura

O sistema segue uma arquitetura baseada em separação de responsabilidades (Client-Server):
1. **Front-end (SPA):** Uma *Single Page Application* em React responsável por toda a interface, roteamento e consumo de serviços.
2. **Back-end (API REST):** Uma API desenvolvida em Spring Boot para fornecer dados dinâmicos estruturados (ex: textos bilingues, lista de projetos) via formato JSON.

---

## 🔧 Instalação e Execução

### Pré-requisitos
* **Java JDK:** Versão 17 ou superior
* **Node.js:** Versão v18.x ou superior
* **Maven:** Versão 3.9.x ou superior (ou use o wrapper `mvnw`)

### 🔑 Variáveis de Ambiente

Crie um arquivo **`.env.local`** na raiz da pasta `/frontend` para a configuração do formulário de contato e da API:

```env
VITE_API_URL=http://localhost:8080/api
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

> 💡 **Dica:** Copie o arquivo `.env.example` e renomeie para `.env.local`, preenchendo suas credenciais do EmailJS.

### ▶️ Executando o Front-end

```bash
# Acesse a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

### ▶️ Executando o Back-end

```bash
# Acesse a pasta do backend
cd backend

# Execute com o Maven Wrapper (Windows)
./mvnw.cmd spring-boot:run

# Ou no Linux/Mac
./mvnw spring-boot:run
```

O backend estará disponível em: `http://localhost:8080`

---

## 🎨 Personalização

### 📸 Foto de Perfil

Para adicionar sua foto de perfil:

1. Salve sua foto em `frontend/src/assets/foto-perfil.jpg`
2. Edite os arquivos `Home.jsx` e `Sobre.jsx`:

```javascript
// Altere a linha:
const PROFILE_PHOTO = null;

// Para:
import profilePhoto from '../assets/foto-perfil.jpg';
const PROFILE_PHOTO = profilePhoto;
```

**Ou use uma URL externa:**
```javascript
const PROFILE_PHOTO = 'https://url-da-sua-foto.jpg';
```

### 🌙 Tema Dark/Light

O portfólio possui tema automático que:
- **Detecta automaticamente** a preferência do sistema operacional
- **Permite alternância manual** via botão no header (ícone sol/lua)
- **Persiste a preferência** do usuário no `localStorage`

---

## 🚀 Deploy

### Front-end (Vercel)

1. Faça push do código para o GitHub
2. Conecte o repositório na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente na dashboard da Vercel
4. O deploy será automático a cada push na branch `main`

### Back-end

O backend pode ser hospedado em serviços como:
- Railway
- Render
- Heroku
- AWS Elastic Beanstalk

---

## 📁 Estrutura de Pastas

```
portfolio-profissional/
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   └── foto-perfil.jpg    # Sua foto de perfil
│   │   ├── pages/
│   │   │   ├── Home.jsx           # Página inicial
│   │   │   ├── Sobre.jsx          # Sobre mim (bilíngue)
│   │   │   ├── Projetos.jsx       # Timeline de projetos
│   │   │   ├── Experiencias.jsx   # Experiências profissionais
│   │   │   └── Contato.jsx        # Formulário de contato
│   │   ├── App.jsx                # Componente principal + tema
│   │   ├── main.jsx               # Entry point
│   │   └── index.css              # Estilos globais + dark mode
│   ├── .env.example               # Template de variáveis de ambiente
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/portfolio/api/
│   │       │   └── ApiApplication.java
│   │       └── resources/
│   │           └── application.properties
│   ├── pom.xml
│   └── mvnw / mvnw.cmd
├── docs/
│   └── screenshots
└── README.md
```

---

## 🎬 Demonstração

### 🖥️ Páginas

| Home | Sobre Mim |
|------|-----------|
| ![Home](docs/screenshot-home.png) | ![Sobre](docs/screenshot-sobre.png) |

| Projetos | Experiências |
|----------|--------------|
| ![Projetos](docs/screenshot-projetos.png) | ![Experiências](docs/screenshot-experiencias.png) |

| Contato |
|---------|
| ![Contato](docs/screenshot-contato.png) |

---

## 👥 Autores

| Foto | Nome | Contato |
|------|------|---------|
| <img src="https://avatars.githubusercontent.com/allanmateusk" width="100"> | **Allan Mateus** | [![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/allan-mateus/) [![GitHub](https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github)](https://github.com/allanmateusk) [![Email](https://img.shields.io/badge/-Email-red?style=flat-square&logo=gmail)](mailto:allanmateusk@gmail.com) |

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
