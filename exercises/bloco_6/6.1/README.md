<!-- Dia 6.1 | HTML & CSS - Forms -->
## Dia 6.1 | HTML & CSS - Forms

Nessa aula, aprendemos sobre formulários em <strong>HTML</strong>, que são uma forma de enviar informações para outra páigna do seu site ou para um servidor.

Após essa aula, somos capazes de:
- Criar formulários em <strong>HTML</strong> com as tags: `input`, `button`, `textarea`, `select`, `form`.

## Exercícios

### Criando um formulário de currículo

- Crie um arquivo **HTML** chamado `form.html` para o formulário. -> [Acesse aqui](form.html)
- Caso julgue necessário, crie estilos **CSS** para o seu formulário, de acordo com a sua imaginação. Coloque-os em um arquivo `styles.css`
- Crie também um arquivo `script.js` para seu código **JavaScript**

Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:
1. Crie um `<fieldset>` para os seguintes dados pessoais:
  - Nome - Texto
    - Limite de 40 caracteres
    - Campo obrigatório
  - Email - Texto
    - Limite de 50 caracteres
    - Campo obrigatório
  - CPF - Text
    - Limite de 11 caracteres
    - Campo obrigatório
  - Endereço - Texto
    - Limite de 200 caracteres
    - Campo obrigatório
  - Cidade - Texto
    - Limite de 28 caracteres
    - Campo obrigatório
  - Estado - ComboBox
    - Todos os estados do Brasil
    - Utilize estruturas de repetição via **JavaScript** para gerar os `<option>`
    - Campo obrigatório
  - Tipo - Radio Button
    - Casa, Apartamento
    - Campo obrigatório
2. Crie outro `<fieldset>` para dados do seu último emprego
  - Resumo do currículo - TextArea
    - Limite de 1000 caracteres
    - Campo obrigatório
  - Cargo - Texto
    - Limite de 40 caracteres
    - Campo obrigatório
  - Descrição do cargo - Texto
    - Limite de 500 caracteres
    - Campo obrigatório
  - Data de início - Texto
    - Verificar o formato da data `dd/mm/aaaa`.
    - O dia deve ser > 0 e <= 31
    - O mês deve ser > 0 e <= 12
    - O ano não pode ser negativo
    - Caso alguma das condições for inválida no momento do envio do formulário, exibir mensagem de erro contextualizada
    - Campo obrigatório
3. Logo abaixo do formulário, crie um botão que:
  - Chame uma função **JavaScript** e interrompa o fluxo automático do form utilizando o [preventDefault()](https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault)
  - Execute as validações que foram pedidas ao longo da montagem do formulário
  - Monte uma `<div>` com o consolidado dos dados que foram inseridos no formulário
4. Crie um botão `limpar` que limpa todos os campos do formulário e a `<div>` com seu currículo também.