import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__img-container"></div>
      <div className="hero__title-container">
        <h1 className="hero__title">The Bright Future of Web 3.0?</h1>
      </div>
      <div className="hero__p-container">
        <p className="hero__p">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of people. But is it really
          fulfilling its promise?
        </p>
        <button className="hero__btn">READ MORE</button>
      </div>
    </section>
  );
};

export default Hero;
