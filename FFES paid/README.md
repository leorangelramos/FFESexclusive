# 🦅 FFES - Plataforma Educacional de Inglês (LMS Lite)

![Status do Projeto](https://img.shields.io/badge/Status-Produção-brightgreen)
![Tech Stack](https://img.shields.io/badge/Tech-Vanilla%20JS%20%7C%20Web%20Speech%20API-yellow)
![SEO Score](https://img.shields.io/badge/SEO-Otimizado-blue)

> **Acesse online:** [https://ffes.site/](https://ffes.site/)

## 🚀 Resumo Executivo

Esta plataforma é um **Learning Management System (LMS)** leve, focado em alta performance e acessibilidade. Diferente de soluções tradicionais pesadas, este projeto foi construído em **Vanilla JavaScript puro**, garantindo carregamento instantâneo e compatibilidade total com dispositivos móveis sem dependência de frameworks.

O diferencial técnico é a integração com a **Web Speech API** nativa do navegador para exercícios de pronúncia (Speaking) e o uso de **LocalStorage** para gamificação persistente (XP e Níveis) sem necessidade de banco de dados no backend.

---

## 🛠️ Destaques de Engenharia

### 1. Vanilla JavaScript & Performance

A arquitetura "No-Framework" foi escolhida para maximizar a velocidade e o SEO.

- **Manipulação do DOM:** Atualizações de interface diretas e otimizadas.
- **Componentização Manual:** Uso de padrões de projeto (Factory/Module) para criar componentes reutilizáveis como o _Accordion Menu_ e os _Cards de Exercícios_.

### 2. Reconhecimento de Voz (Web Speech API)

Implementação da API nativa do navegador para permitir que alunos pratiquem a fala.

- O sistema captura o áudio do usuário.
- Converte em texto em tempo real.
- Compara a string falada com a resposta esperada utilizando algoritmos de similaridade (Fuzzy matching simplificado).

### 3. Gamificação Client-Side

Sistema de progressão salvo localmente no dispositivo do usuário.

- **Persistência de Dados:** Uso estratégico do `localStorage` para salvar XP, Nível e Conquistas.
- **Engajamento:** O aluno pode fechar o navegador e voltar depois sem perder seu progresso, simulando uma experiência de app nativo.

### 4. SEO Técnico e Estruturado

O projeto não é apenas código, é um produto digital otimizado.

- **JSON-LD (Schema.org):** Implementação completa de esquemas para `EducationalOrganization` e `Course`.
- **Open Graph:** Tags otimizadas para compartilhamento rico em redes sociais (WhatsApp, LinkedIn).

---

## 📂 Estrutura do Projeto

```bash
/
├── index.html          # Dashboard principal (Home)
├── style.css           # Estilização Global (CSS Variables, Flexbox, Grid)
├── script.js           # Lógica Core (Event Listeners, State Management)
├── sitemap.xml         # Mapa do site para Google Search Console
├── /assets             # Imagens e ícones otimizados
└── /exercises          # Módulos de exercícios (HTMLs individuais para SEO)
    ├── speaking001.html
    ├── quiz01.html
    └── ...
```

👨‍💻 Autor
Leo Ramos Full Stack Developer & English Teacher

Desenvolvedor focado em soluções web performáticas e educacionais. Especialista em unir engenharia de software com metodologias de ensino.

© 2025 FFES - Feathered Friends English School
