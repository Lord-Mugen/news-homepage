import "./container.css";
import Hero from "../Components/Hero/Hero";
import SideBar from "../Components/SideBar/SideBar";
import Card from "../Components/Card/Card";
import data from "../data/data.json";

const Container = () => {
  const { cardsInfo } = data;
  return (
    <div className="container" id="container">
      <section className="container__hero">
        <Hero />
      </section>
      <section className="sideBar">
        <SideBar />
      </section>
      <section className="container__card">
        {cardsInfo.map((info) => (
          <Card
            key={info.id}
            image={info.image}
            number={info.number}
            title={info.title}
            text={info.text}
          />
        ))}
      </section>
    </div>
  );
};

export default Container;
