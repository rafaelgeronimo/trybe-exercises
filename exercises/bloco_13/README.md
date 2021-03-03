<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]

<h2>Bloco 13 | Ciclo de Vida de Componentes e React Router</h2>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#dia-13.1">Dia 13.1 | Ciclo de vida de componentes</a>
    </li>
    <li>
      <a href="#dia-13.2">Dia 13.2 | React Router</a>
    </li>
    <li>
      <a href="#dia-13.3">Dia 13.3 | Projeto - Movie Cards Library CRUD</a>
    </li>
  </ol>
</details>

<!-- Dia 13.1 | Ciclo de vida de componentes -->
## <a id="dia-13.1" href="13.1">Dia 13.1 | Ciclo de vida de componentes</a>
Nessa aula, aprendemos um conceito fundamental para a correta construção de nossas aplicações em **React**. Todo componente React tem, no contexto da interação da aplicação com cada browser, um `Lifecycle`, ou **ciclo de vida de um componente**. As fases desse `Lifecycle` têm, associadas a si, funções através das quais quem programa pode associar comportamentos.
Aprendemos a utilizar os métodos do ciclo de vida do componente para que possamos programar cada coisa no seu devido lugar.

Após os estudos de hoje, nós nos tornamos capazes de:
- Utilizar o `componentDidMount` para executar uma ação após o componente ser inserido no DOM;
- Utilizar o `shouldComponentUpdate` para avaliar se uma atualização do componente deve ou não acontecer naquele momento;
- Utilizar o `componentDidUpdate` para executar uma ação após o componente ser atualizado;
- Utilizar o `componentWillUnmount` para realizar uma ação antes de o componente ser desmontado.

---

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/rafaelgeronimo