# Gatilhos de Segurança e Consistência

Este arquivo funciona como checklist de segurança para manutenção do projeto.

## Gatilhos antes de alterar UI

- Se uma mudança afetar mais de uma seção, revisar a página como um todo antes de finalizar.
- Se a alteração incluir novo CTA, validar contraste, alinhamento e versão mobile.
- Se adicionar um novo componente, confirmar se ele respeita os padrões de `ui`, `layout` ou `sections`.
- Se mudar texto comercial, verificar tom, clareza e consistência com a proposta da marca.

## Gatilhos para evitar desvio de padrão

- Não criar estilos novos em múltiplos lugares quando um componente compartilhado resolve.
- Não usar cores arbitrárias fora dos tokens do projeto.
- Não quebrar a estrutura de grid responsivo sem testar desktop, tablet e mobile.
- Não misturar conteúdo e layout em arquivos que deveriam ser apenas de composição.

## Checklist rápido

- Reaproveitei componente existente?
- O texto ficou legível em telas pequenas?
- O bloco segue a mesma linguagem visual do restante do projeto?
- A mudança melhora manutenção ou cria duplicação?
