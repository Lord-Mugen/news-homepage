import "./card.css";

const Card = ({ image, number, title, text }) => {
  return (
    <div className="card__container">
      <div className="card">
        <img className="card__img" src={image} alt="card image" />
        <div className="card__content">
          <h3 className="card__num">{number}</h3>
          <h4 className="card__title">{title}</h4>
          <p className="card__p">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
