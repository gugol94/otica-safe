# Óticas Safe — Site estático

Site simples e responsivo (Bootstrap 5) inspirado no layout do MediNest. Ideal para publicar no GitHub Pages.

## Estrutura

- `index.html` — Página principal com seções: Exames, Promoção, Galeria, Contato.
- `assets/css/style.css` — Estilos personalizados (cores e ajustes responsivos).
- `assets/js/main.js` — JS leve (scroll, navegação, ano no rodapé).
- `assets/img/logo.svg` — Logo placeholder (substitua pelo seu).
- `assets/img/gallery/*.svg` — Imagens mock (substitua por fotos reais).
- `.nojekyll` — Arquivo para evitar processamento Jekyll no Pages.

## Personalização rápida

1. Substitua `assets/img/logo.svg` pelo seu arquivo (SVG/PNG). Atualize o `link rel="icon"` se quiser.
2. Atualize os textos das seções em `index.html` (Exames, Promoção, Contato) conforme sua necessidade.
3. No bloco de Contato, troque telefone e links do WhatsApp.
4. Troque as imagens da galeria em `assets/img/gallery/` (mantenha os nomes ou ajuste os caminhos no HTML).
5. Opcional: altere a cor principal em `:root { --brand: #16a085; }` no `style.css`.

## Formulário sem backend

A página usa [FormSubmit](https://formsubmit.co/) como exemplo. Para ativar:
- Mude o `action` do `<form>` para `https://formsubmit.co/SEU_EMAIL`.
- Opcional: adicione `<input type="hidden" name="_next" value="https://SEU_USUARIO.github.io/otica-safe/agradecimento.html">` para redirecionar.

## Publicando no GitHub Pages

Há duas formas. Recomendo via GitHub Actions (pipeline) abaixo:

### Opção A — via GitHub Actions (automático)

1. Faça push deste projeto para o repositório `otica-safe` (na branch `main`).
2. No GitHub, vá em Settings > Pages:
	- Em Build and deployment > Source: selecione "GitHub Actions".
3. O workflow `.github/workflows/deploy.yml` já está pronto e fará o deploy a cada push na `main`.
4. Acompanhe em Actions a execução "Deploy to GitHub Pages"; ao final aparecerá a URL publicada.

### Opção B — via configuração simples (sem Actions)

1. Crie o repositório `otica-safe` no GitHub e envie estes arquivos.
2. No GitHub, vá em Settings > Pages > Branch: `main` (ou `master`) e pasta raiz `/`.
3. Aguarde 1–2 minutos: a página estará em `https://SEU_USUARIO.github.io/otica-safe/`.

## Desenvolvimento local

Abra o `index.html` no navegador ou use uma extensão de Live Server no VS Code para atualização automática.

## Licenças

- Bootstrap 5 (MIT). Ícones Bootstrap (MIT). As imagens mock em SVG são livres para uso neste projeto. Substitua por seus próprios materiais quando possível.
