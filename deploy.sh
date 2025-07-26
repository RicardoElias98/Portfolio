#!/bin/bash

# Limpar arquivos antigos do deploy (ajusta os nomes conforme necessário)
rm -rf ./assets ./favicon.ico ./index.html ./main.*.js ./polyfills.*.js ./runtime.*.js ./styles.*.css

# Build Angular
npx ng build -c production --base-href="/Portfolio/"

# Copiar para raiz
cp -r dist/portofolio/browser/* .

# Garantir .nojekyll para GitHub Pages
touch .nojekyll

# Commit e push
git add .
git commit -m "Deploy atualizado"
git push origin main

