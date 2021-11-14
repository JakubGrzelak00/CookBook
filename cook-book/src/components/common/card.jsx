import "../../styles/card.css";
const Card = ({ imageID, title }) => {
  return (
    <div className="card-box">
      <div>
        <img
          src={
            "https://spoonacular.com/recipeImages/" + imageID + "-312x231.jpg"
          }
          alt=""
        />
      </div>
      <p className="title">{title}</p>
    </div>
  );
};

export default Card;
