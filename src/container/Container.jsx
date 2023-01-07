import "./container.css";
import Hero from "../Components/Hero/Hero";
import SideBar from "../Components/SideBar/SideBar";
import Cards from "../Components/Cards/Cards";

const Container = () => {
  return (
    <div className="container" id="container">
      <section className="container__hero">
        <Hero />
      </section>
      <section className="sideBar">
        <SideBar />
      </section>
      <section className="container__cards">
        <Cards />
      </section>
    </div>
  );
};

export default Container;
