<!-- Dia 6.3 | CSS Flexbox - Parte 1 -->
## Dia 6.3 | CSS Flexbox - Parte 1

### Exercícios

**Trybe Tech-Galley**

As instruções para o exercício estão disponíveis [neste repositório](https://github.com/tryber/exercise-tech-gallery).

A resposta para o exercício proposto está [neste repositório](https://github.com/rafaelgeronimo/exercise-tech-gallery). (privado)

O código está disponível abaixo:

tech-gallery.html
```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trybe Tech-Gallery</title>
    <link rel = "stylesheet" type = "text/css" href = "style.css" />
  </head>
  </head>
  <body>
    <header class="header">
      <img class="header-img" src="./images/trybe-logo.jpg" alt="Website logo" />
      <h1>TRYBE TECH-GALLERY</h1>
      <h3>SIGN-UP</h3>
    </header>
    <section class="about">
      <p>Take a look at some of the technologies which you will learn in our fundamentals and front-end module!</p>
    </section>
    <section class="techs">
      <div class="first-line">
        <div>
          <h4>HTML</h4>
          <img class="gallery-img" src="./images/html-logo.png" alt="HTML logo" />
        </div>
        <div>
          <h4>CSS</h4>
          <img class="gallery-img" src="./images/css-logo.png" alt="CSS logo" />
        </div>
        <div>
          <h4>JAVASCRIPT</h4>
          <img class="gallery-img" src="./images/javaScript-logo.png" alt="JavaScript logo" />
        </div>
      </div>
      <div class="second-line">
        <div>
          <h4>REACT</h4>
          <img class="gallery-img" src="./images/react-logo.png" alt="React logo" />
        </div>
        <div>
          <h4>RTL</h4>
          <img class="gallery-img" src="./images/rtl-logo.png" alt="React Testing Library logo" />
        </div>
        <div>
          <h4>REDUX</h4>
          <img class="gallery-img" src="./images/redux-logo.png" alt="Redux logo" />
        </div>
      </div>
      <hr class="divisory"/>
      
    </section>
    <footer class="footer">
      <a href="https://www.instagram.com/betrybe/" target="_blank">
        <img class="social-img" src="./images/instagram-logo.png" alt="Instagram logo" />
      </a>
      <a href="https://www.linkedin.com/school/betrybe/" target="_blank">
        <img class="social-img" src="./images/linked-in-logo.png" alt="Instagram logo" />
      </a>
    </footer>
  </body>
</html>
```

style.css
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: 'Ubuntu'; */
  font-family: 'Roboto', sans-serif;
}

.header {
  display: flex;
  background: rgb(50, 52, 51);
  color: rgb(254, 254, 254);
  justify-content: space-around;
  align-items: center;
}

.header-img {
  width: 70px;
}

.about {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  font-weight: 700;
}

.techs {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

.first-line div, .second-line div {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background: rgb(241, 241, 241);
  border-radius: 15px;
  margin: 10px;
  padding: 15px 5px;
  color: rgb(50, 52, 51);
  box-shadow: 4px 4px 0 rgb(224, 224, 224);
}

.first-line, .second-line {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.gallery-img {
  width: 150px;
  border-radius: 15px;
}

.divisory {
  margin: 20px auto 0;
  width: 150px;
  border: 0;
  border-top: 2px solid #ccc;
  
  padding: 0;
}

.footer {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.social-img {
  width: 25px;
  margin-left: 10px;
}
```