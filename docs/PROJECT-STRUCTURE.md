# Estrutura do Projeto

Este projeto foi organizado para manter a UI previsível, simples de manter e fácil de evoluir sem quebrar o padrão visual.

## Organização atual

- `src/App.jsx`: composição principal da página.
- `src/main.jsx`: ponto de entrada do Vite.
- `src/styles/globals.css`: base global do Tailwind e estilos comuns.
- `src/data/siteData.js`: conteúdo estático e mockado da landing page.
- `src/components/ui/`: componentes reutilizáveis e pequenos.
- `src/components/layout/`: header e footer.
- `src/components/sections/`: seções da página separadas por responsabilidade.

## Regra geral

- `App.jsx` deve conter apenas a composição da página.
- O conteúdo textual deve ficar em `src/data/` sempre que for reutilizável ou relevante para manutenção.
- Componentes de seção não devem misturar múltiplas responsabilidades.
- Componentes comuns devem ser genéricos o suficiente para reaproveitamento.
