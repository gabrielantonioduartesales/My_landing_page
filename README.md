D# 🌐 Portfólio — Gabriel Antonio Duarte Sales

Bem-vindo ao repositório do meu **portfólio profissional**, desenvolvido para apresentar minhas **habilidades, projetos e contato direto** com empregadores e clientes.  
O site foi feito com foco em **performance, responsividade, acessibilidade e interatividade.**

---

## 🧩 Tecnologias Utilizadas

- **HTML5** — Estrutura semântica do site  
- **CSS3** — Layout responsivo, animações e design moderno  
- **JavaScript (ES6)** — Funcionalidades dinâmicas (carrossel, rolagem suave, ticker e integração com EmailJS)  
- **EmailJS** — Envio de e-mails direto pelo formulário de contato  
- **Google reCAPTCHA v2** — Proteção contra spam  
- **Feather Icons / Flaticon** — Ícones vetoriais otimizados  
- **GitHub Pages** — Hospedagem gratuita do site  

---

## 🧱 Estrutura de Pastas e Arquivos

```
my_landing_page/
├── cv/ # PDF(s) do currículo
├── img/ # Imagens e assets gráficos
├── email.js # Integração EmailJS (formulário)
├── en_inser.js # Traduções / inserções em inglês
├── index_en.html # Versão em inglês (landing)
├── index_pt.html # Versão em português (landing)
├── index.html # Entrada padrão
├── LICENSE
├── media_colors.css # Variantes / overrides de cores
├── media_portrait.css # Regras para portrait / mobile
├── pt_inser.js # Traduções / inserções em português
├── README.md # Este arquivo (edite conforme necessário)
├── script.js # Lógica: carrossel, ticker, scroll suave
└── style.css # Estilos principais
```

---

## ⚙️ Funcionalidades Principais

### 🎠 Carrossel Interativo
- Navegação com botões de **avançar e voltar**
- Indicadores (dots) sincronizados  
- Transição suave entre slides

### 🧾 Ticker de Tecnologias
- Mostra ícones de **skills técnicas**
- Pausa automaticamente ao passar o mouse

### 🧭 Navbar Inteligente
- Fixa e muda de estilo ao rolar a página (`.scrolled`)
- Menu hambúrguer responsivo para mobile

### ⬇️ Scroll Suave entre Seções
- Animação de rolagem com easing customizado
- Atualiza o `hash` na URL ao fim da animação

### ✉️ Formulário de Contato
- Integração com **EmailJS**
- Protegido com **Google reCAPTCHA**
- Exibe mensagens de sucesso e erro personalizadas

### 🕊️ Animações de Entrada (Fade-in)
- Elementos aparecem suavemente ao entrar no campo de visão do usuário

---

## 🚀 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/gabrielantonioduartesales/My_landing_page.git
   ```

2. Acesse a pasta:
   ```bash
   cd My_landing_page
   ```

3. Abra o arquivo `index.html` diretamente no navegador.

> 💡 Dica: Para evitar erros de `EmailJS` e `reCAPTCHA`, esses serviços só funcionarão corretamente **em ambiente online (GitHub Pages ou domínio próprio)**.

---

## ☁️ Publicação no GitHub Pages

1. No repositório do GitHub, vá em:  
   **Settings → Pages → Source → `main` branch → /root**  

2. Clique em **Save**.  
3. O site ficará disponível em:  
   ```
   https://gabrielantonioduartesales.github.io/My_landing_page/
   ```

---

## 📎 Currículo para Download

O botão “Baixar” no site utiliza o atributo `download`:
```html
<a href="cv/CV_Gabriel_Antonio_Duarte_Sales.pdf" download>
    <i data-feather="download"></i> Baixar
</a>
```

---

## 🧠 Melhorias Futuras

- Adicionar modo escuro automático (dark mode)  
- Criar seção de projetos com cards animados  
- Conectar o formulário a um backend alternativo (ex: Node.js)  
- Adicionar transições usando Framer Motion ou GSAP  

---

## 👨‍💻 Autor

**Gabriel Antonio Duarte Sales**  
📍 Minas Gerais, Brasil  
💼 Professor de TI no SENAC | Analista e Desenvolvedor de Sistemas  
📧 [gabriel_27duarte@outlook.com](mailto:gabriel_27duarte@outlook.com)  
🌐 [Portfólio Online](https://gabrielantonioduartesales.github.io/My_landing_page)

---

## 📜 Licença

Este projeto é de uso **pessoal e educacional**, podendo ser adaptado com créditos ao autor.  
© 2025 — Gabriel Antonio Duarte Sales
