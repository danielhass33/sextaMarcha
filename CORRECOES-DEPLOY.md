# Correções GitHub Pages — Sexta Marcha

- `angular.json`: `baseHref` de produção `/sextaMarcha/`.
- `src/app/data/courses.ts`: URLs relativas para imagens `.webp`.
- `education.component.ts`: corrigida extensão `.jpg` para `.webp`.
- `portal.component.html`: fallback aponta para logo existente, com URL relativa.
- `checkout.component.html`: logo com URL relativa.
- `home.component.css`: hero incorporado pelo compilador a partir de arquivo existente.
- Workflow `.github/workflows/deploy.yml` preservado: já publica com base-href e fallback SPA.

## Publicar

Substitua os arquivos correspondentes no projeto local, mantendo seu `.git` e seus arquivos de configuração privados.

```bash
npm ci
npm run build
git add .
git commit -m "fix: corrige imagens e base href no GitHub Pages"
git push
```

O erro 401 de `listCourseOrders` é separado; não foi alterada a autenticação Firebase.
