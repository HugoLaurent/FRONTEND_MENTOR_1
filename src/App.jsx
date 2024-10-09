import "./App.css";

import mainImg from "./assets/images/desktop-image-hero-1.jpg";

const dataNavbar = ["home", "shop", "about", "contact"];
function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title header__title--highlight">ROOM</h1>

        <ul className="navbar__list">
          {dataNavbar.map((item, index) => (
            <li key={index} className="navbar__item">
              {item}
            </li>
          ))}
        </ul>
      </header>

      <main className="main-content">
        <section className="main-content__section main-content__section--top">
          <article className="main-content__article">
            <img className="article__image" src={mainImg} alt="Placeholder" />
          </article>
          <article className="main-content__article--wrapper">
            <div className="main-content__article main-content__article--text">
              <h2 className="article__title">
                Discover innovative ways to decorate
              </h2>
              <p className="article__description">
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>
              <button className="article__button article__button--highlight">
                Shop Now
              </button>
            </div>
            <div className="main-content__article-buttons">
              <button className="article__button">B1</button>
              <button className="article__button">B2</button>
            </div>
          </article>
        </section>

        <section className="main-content__section">
          <article className="main-content__article">
            <img
              className="article__image"
              src="https://via.placeholder.com/150"
              alt=""
            />
          </article>
          <article className="main-content__article">
            <h3 className="article__subtitle">Lorem ipsum dolor sit amet.</h3>
            <p className="article__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              rerum nisi iusto dolor voluptatum quia veniam suscipit, sed, id
              nobis quis necessitatibus repudiandae ut quo commodi dolorem aut
              distinctio sequi.
            </p>
          </article>
          <article className="main-content__article">
            <img
              className="article__image"
              src="https://via.placeholder.com/150"
              alt=""
            />
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
