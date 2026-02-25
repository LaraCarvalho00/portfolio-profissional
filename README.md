# 🏷️ Portfólio Profissional - Lara Carvalho 👩‍💻

> [!NOTE]
> Este projeto é o desenvolvimento do meu portfólio profissional web. Ele consolida minhas experiências atuando como Product Owner com foco em Inteligência Artificial Generativa, meus desenvolvimentos acadêmicos e meus empreendimentos paralelos. O objetivo é criar uma vitrine tecnológica moderna e responsiva que demonstre minha aptidão para atuar na área de tecnologia e dados.

---

## 🚧 Status do Projeto

![React](https://img.shields.io/badge/React-18-007ec6?style=for-the-badge&logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-5-007ec6?style=for-the-badge&logo=vite&logoColor=white) ![Java](https://img.shields.io/badge/Java-17-007ec6?style=for-the-badge&logo=openjdk&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-3-007ec6?style=for-the-badge&logo=springboot&logoColor=white) ![Vercel](https://vercelbadge.vercel.app/api/joaopauloaramuni/joaopauloaramuni-portfolio?style=for-the-badge) 

---

## 📚 Índice
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Autores](#-autores)

---

## 📝 Sobre o Projeto
Este projeto foi idealizado inicialmente como requisito acadêmico para o laboratório do curso de Engenharia de Software da PUC-Minas, mas construído com o propósito de se tornar a minha plataforma profissional definitiva. 

Ele resolve a necessidade de centralizar minha trajetória — que transita entre a liderança de produtos (Product Owner), o desenvolvimento focado em IA (Python, IBM Watson, LLMs) e a visão de negócios (como cofundadora da 4 Laços Paperie). O portfólio entrega valor ao apresentar essas habilidades de forma estruturada para recrutadores, parceiros de negócios e a comunidade acadêmica.

---

## ✨ Funcionalidades Principais
As funcionalidades foram divididas em seções acessíveis por um menu de navegação responsivo:

- 👩‍💻 **Sobre Mim:** Apresentação bilíngue (Português/Inglês) detalhando objetivos profissionais e acadêmicos.
- 🚀 **Projetos:** Linha do tempo dinâmica apresentando projetos acadêmicos, de negócios e de tecnologia, com links para repositórios.
- 💼 **Experiências:** Histórico profissional organizado, destacando atuações em Inteligência Artificial e empreendedorismo.
- 📨 **Contato:** Integração de formulário funcional (via EmailJS) e links rápidos para LinkedIn e GitHub.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end
* **Framework/Biblioteca:** React v18
* **Build Tool:** Vite
* **Estilização:** CSS3 / Tailwind CSS (ou a biblioteca de sua preferência)
* **Roteamento:** React Router Dom
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

### 🔑 Variáveis de Ambiente

Crie um arquivo **`.env.local`** na raiz da pasta `/frontend` para a configuração do formulário de contato e da API:

```env
VITE_API_URL=http://localhost:8080/api
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui