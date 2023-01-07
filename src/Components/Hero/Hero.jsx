import "./hero.css";
import heroImg from "../../assets/images/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <img className="hero__img" src={heroImg} alt="" />
      </div>
      <div>
        <h1 className="hero__title">The Bright Future of Web 3.0?</h1>
      </div>
      <div>
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
