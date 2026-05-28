# Lista de Tarefas — JavaScript, DOM & LocalStorage



Projeto de uma aplicação de lista de tarefas desenvolvida com JavaScript puro, focada em manipulação dinâmica do DOM, tratamento de eventos e persistência de dados utilizando JSON + LocalStorage.

A aplicação permite adicionar, remover e restaurar tarefas automaticamente mesmo após recarregar a página, simulando o funcionamento básico de um sistema de gerenciamento de tarefas no navegador.

## Principais conceitos aplicados

- Manipulação do DOM com:
  - `querySelector`
  - `createElement`
  - `appendChild`
  - `remove`
- Criação dinâmica de elementos HTML via JavaScript
- Uso de Event Listeners para interações com teclado e cliques
- Persistência de dados utilizando `LocalStorage`
- Conversão de dados com:
  - `JSON.stringify()`
  - `JSON.parse()`
- Organização do código em funções reutilizáveis
- Responsividade e estilização moderna com CSS

## Destaque técnico

O projeto enfatiza a integração entre a interface e o armazenamento local do navegador, utilizando:

```js
JSON.stringify()
JSON.parse()
localStorage.setItem()
localStorage.getItem()
```

para transformar arrays JavaScript em JSON e persistir os dados entre sessões, garantindo que as tarefas permaneçam salvas mesmo após atualizar a página.

Além disso, toda a lista é renderizada dinamicamente através da manipulação do DOM, sem dependência de frameworks externos.
