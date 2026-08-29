# Catálogo de Imóveis — Portfólio Visual

Aplicação web (Next.js + React + TypeScript + Tailwind CSS) que apresenta um
portfólio visual de imóveis no formato de revista/flipbook: capa, capítulo de
abertura por casa, páginas de fotos com layouts editoriais variados e página
final de contato.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para gerar a versão de produção:

```bash
npm run build
npm run start
```

## Onde editar o conteúdo

- **`lib/config.ts`** — nome da empresa, logo, título/subtítulo da capa,
  telefone, WhatsApp, Instagram e endereço. Troque `logo` pelo caminho do
  arquivo real da logo (coloque o arquivo em `public/imoveis/logo.png` ou
  ajuste o caminho).
- **`lib/properties.ts`** — lista de imóveis. Para adicionar uma casa nova,
  copie um item do array e ajuste `id`, `number`, `title` e o slug usado em
  `placeholderSet("casa-XX")`.
- **`public/imoveis/casa-XX/`** — pasta onde vão as fotos reais de cada casa:
  `fachada.jpg`, `sala.jpg`, `cozinha.jpg`, `quarto.jpg`, `banheiro.jpg`.
  Até lá, o catálogo exibe placeholders elegantes indicando o caminho
  esperado de cada foto — nada foi inventado.
- **`public/imoveis/capa/fachada-destaque.jpg`** — foto grande de destaque da
  capa.

## Estrutura de páginas

`lib/catalogPages.ts` monta a sequência: capa → (para cada imóvel: capítulo
de abertura + 3 páginas de fotos em layouts que se alternam) → página final.
Os layouts disponíveis ficam em `components/layouts/` (página cheia, foto
grande + duas pequenas, duas lado a lado, assimétrico 40/60, colagem e
fachada com detalhe vermelho).

## Navegação

Setas de teclado (← →), botões na tela, swipe no celular e um botão
"Início" para voltar à capa. O contador de página fica discreto no rodapé.

## Identidade visual

Preto/grafite como base, branco para texto e um vermelho de destaque usado
com moderação (linhas finas, números e o botão de contato), seguindo a
paleta da logo fornecida. As fontes usam pilhas do sistema para não
depender de download externo; para usar a fonte de marca, troque por
`next/font/local` em `app/layout.tsx`.
