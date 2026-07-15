# Proposta — Dra. Thalita Silva

Nova versão da página da Clínica de Dentistas Dra. Thalita Silva (Recreio dos Bandeirantes e Jacarepaguá, RJ), reorganizada a partir do conteúdo real do site atual (drathalitasilva.com): serviços, textos, depoimentos do Google, endereços e WhatsApp.

Link publicado: https://rodrigosilvatcc.com/proposta-thalita/

## Estrutura

- `site/` — HTML/CSS/JS estático, pronto para deploy (é isto que sobe no servidor)
- `assets/` — imagens originais baixadas do site atual, usadas como fonte
- `optimize.js` — script Node (usa `sharp`) que gera as versões `.webp` otimizadas em `assets/opt/`, copiadas manualmente para `site/img/`

## Rodando localmente

```bash
npm install
node optimize.js   # gera assets/opt/*.webp (se precisar reprocessar as imagens)
npx serve site      # serve o site em http://localhost:3000
```

## Deploy

O deploy para a hospedagem (Hostinger, via FTP) é feito por um script separado em `../deploy/deploy.js`:

```bash
node ../deploy/deploy.js site proposta-thalita
```
