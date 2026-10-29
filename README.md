# Site Alvim Transportes e Reboques

Site estático (HTML, CSS e JavaScript). Sem backend e sem custo.

## 1. Substitua as imagens provisórias (obrigatório)
As imagens atuais são **placeholders**. Troque-as, mantendo exatamente os mesmos nomes:

| Arquivo | O que colocar |
|---|---|
| `assets/logo/logo-alvim.png` | Logomarca original (sem alterações) |
| `assets/imagens/capa-alvim-real.png` | Foto do Scania vermelho com o VW branco (fundo da capa) |
| `assets/imagens/veiculos-leves.jpg` | Guincho com veículo leve |
| `assets/imagens/veiculos-pesados.jpg` | Scania com veículo pesado |
| `assets/imagens/estrutura.jpg` | Frota / estrutura da empresa |

Dica: deixe as fotos com no máximo ~300 KB (ex.: squoosh.app) para carregar rápido.

## 2. WhatsApp e telefone (já configurados)
WhatsApp atual: (31) 99653-4296 (`const WHATSAPP = "5531996534296"` em `js/script.js`). Para trocar, altere esse valor e os links `wa.me` no rodapé e em `contato.html`.

(Instruções originais:)
Abra `js/script.js` e preencha no topo: `const WHATSAPP = "5531999999999";` (DDI + DDD + número, só dígitos).
Enquanto vazio, os botões ligam para o telefone e o formulário **não** finge envio.
Para alterar o telefone fixo, troque `(31) 3911-9292` / `+553139119292` nos arquivos `.html` e no `js/script.js` (use a busca global do editor).

## 3. Publicar no GitHub Pages
1. Crie uma conta em github.com e clique em **New repository** (nome sugerido: `alvim-reboques`, público).
2. Clique em **uploading an existing file** e arraste **o conteúdo** da pasta (index.html, css, js, assets etc.). Faça **Commit changes**.
3. Vá em **Settings > Pages**. Em *Source* escolha **Deploy from a branch**, branch **main**, pasta **/ (root)**, e salve.
4. Em 1 a 2 minutos o site abre em `https://SEUUSUARIO.github.io/alvim-reboques/`.

Todos os caminhos são relativos, então funciona dentro do subdiretório do repositório.

## 4. Ajustar a URL (SEO)
Troque `https://SEUUSUARIO.github.io/alvim-reboques` pela URL real em: todos os `.html` (canonical, Open Graph, dados estruturados), `sitemap.xml` e `robots.txt`. Depois cadastre o sitemap no Google Search Console.

## 5. Domínio próprio
Em **Settings > Pages > Custom domain**, informe o domínio. No provedor do domínio crie um registro CNAME `www` apontando para `SEUUSUARIO.github.io` (e os registros A do GitHub para o domínio raiz, conforme docs.github.com/pages). Marque **Enforce HTTPS**. Depois atualize a URL conforme o item 4.

## 6. Editar textos
Edite os `.html` em qualquer editor. Cores ficam no início de `css/style.css` (`:root`).

## Pendências a confirmar com a empresa
WhatsApp oficial, endereço operacional (hoje consta o cadastral: Rua Bélgica, 101, Glória), horários e área de cobertura. Nenhum horário, cobertura ou depoimento foi inventado.
