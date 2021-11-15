import "../../styles/card.css";
import { Link } from "react-router-dom";
const Card = ({ imageID, title, linkTo }) => {
  return (
    <div className="card-box">
      <Link to={linkTo}>
        <img
          src={
            "https://spoonacular.com/recipeImages/" + imageID + "-312x231.jpg"
          }
          alt=""
        />
      </Link>
      <p className="title">{title}</p>
    </div>
  );
};

export default Card;
