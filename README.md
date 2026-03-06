# 🏷️ Portfólio Profissional - Lara Carvalho 👩‍💻

> [!NOTE]
> Este projeto é o desenvolvimento do meu portfólio profissional web. Ele consolida minhas experiências atuando como Product Owner com foco em Inteligência Artificial Generativa, meus desenvolvimentos acadêmicos e meus empreendimentos paralelos. O objetivo é criar uma vitrine tecnológica moderna e responsiva que demonstre minha aptidão para atuar na área de tecnologia e dados.

---

## 🚧 Status do Projeto

![React](https://img.shields.io/badge/React-18-007ec6?style=for-the-badge&logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-5-007ec6?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-4-007ec6?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Spline](https://img.shields.io/badge/Spline-3D-black?style=for-the-badge&logo=spline&logoColor=white)

---

## 📚 Índice
- [Sobre o Projeto](#-sobre-o-projeto)
- [Link do Projeto](#-link-do-site-publicado)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação e Execução](#-instalação-e-execução)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Autores](#-autores)

---

## 📝 Sobre o Projeto
Este projeto foi idealizado inicialmente como requisito acadêmico para o laboratório do curso de Engenharia de Software da PUC-Minas (Campus Liberdade). 

Ele centraliza minha trajetória entre a liderança de produtos (Product Owner na Luggo), o desenvolvimento focado em IA (Python, IBM Watson, LLMs) e a visão de negócios como cofundadora da **4 Laços Paperie**. A interface utiliza conceitos modernos como **Glassmorphism** e elementos **3D interativos** via Spline para proporcionar uma experiência imersiva de alto nível.

---

## 🌐 Link do Site Publicado
**Acesse o portfólio online:** [https://portfolio-profissional-rho.vercel.app](https://portfolio-profissional-rho.vercel.app)

---

## ✨ Funcionalidades Principais
- 🏠 **Home:** Interface premium com **background 3D interativo** e efeito de vidro fosco (Glassmorphism).
- 👩‍💻 **Sobre Mim:** Apresentação bilíngue detalhando objetivos profissionais e acadêmicos.
- 🚀 **Projetos:** Linha do tempo dinâmica com destaque para o **Raio-X do Negócio** (IA).
- 💼 **Experiências:** Histórico organizado com foco em metodologias ágeis e IA Generativa.
- 📨 **Contato:** Formulário funcional integrado via **EmailJS** e links sociais.
- 🌙 **Tema Automático:** Detecção de preferência do sistema com troca manual (Dark/Light).

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end
* **Framework:** React v18 com Vite v5.
* **Estilização:** Tailwind CSS v4.
* **3D:** @splinetool/react-spline.
* **Roteamento:** React Router Dom v7.
* **Fontes:** Inter (Interface Clean).
* **Integração de E-mail:** EmailJS.

### 🖥️ Back-end (API de Suporte)
* **Linguagem:** Java 17 (Spring Boot 3.x).

### ⚙️ Infraestrutura & Deploy
* **Hospedagem:** Vercel (CI/CD via GitHub).

---

## 🔧 Instalação e Execução

### 🔑 Variáveis de Ambiente
Crie um arquivo **`.env.local`** na raiz da pasta `/frontend`:
```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key

---

## 📁 Estrutura de Pastas
portfolio-profissional/
├── frontend/
│   ├── docs/             # Capturas de tela (screenshots)
│   ├── src/
│   │   ├── assets/       # perfil.png e recursos estáticos
│   │   ├── pages/        # Home, Sobre, Projetos, Experiencias, Contato
│   │   └── App.jsx       # Componente principal
├── backend/              # Estrutura API Java/Spring
└── README.md

---

## 👥 Autores

| Foto | Nome | Contato |
|------|------|---------|
| <img src="frontend/src/assets/perfil.png" width="100" style="border-radius: 50%;"> | **Lara Andrade Carvalho** | [![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=linkedin)](https://linkedin.com/in/seu-perfil) [![GitHub](https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github)](https://github.com/LaraCarvalho00) |

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.