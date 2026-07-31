# Padrão de Componentes

Este documento define o padrão base para novos componentes do projeto.

## Objetivo

Garantir consistência visual, responsiva e estrutural entre todas as telas e seções.

## Regras de criação

- Prefira componentes pequenos e focados em uma única responsabilidade.
- Nomeie componentes com `PascalCase`.
- Coloque componentes compartilhados em `src/components/ui/`.
- Coloque seções da página em `src/components/sections/`.
- Mantenha dados estáticos em `src/data/`.

## Regras de UI

- Use os tokens existentes em `tailwind.config.js` e `src/styles/globals.css`.
- Não introduza cores novas sem revisar a paleta do projeto.
- Evite inline styles, exceto em casos realmente pontuais e justificáveis.
- Preserve espaçamentos, bordas arredondadas, sombra e linguagem de glassmorphism do projeto.
- Reutilize `Button` e `SectionHeader` sempre que o padrão encaixar.

## Padrão de conteúdo

- Todo bloco textual deve ter hierarquia clara: título, descrição e chamada para ação quando necessário.
- Se uma nova seção repetir lógica de outra, extraia um componente comum.
- Não duplicar blocos inteiros de markup entre páginas ou seções.
