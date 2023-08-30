import "./GigCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  const { img, pp, desc, price, star, username } = item;
  const wholeNumberPart = Math.floor(price);
  const decimalPart = Math.floor((price - wholeNumberPart) * 100);
  const isDecimal = decimalPart !== 0;

  return (
    <Link to="/gig/123" state={{ item }} className="link">
      <div className="gigCard">
        <img src={img} alt="gig-image" className="gigImage" />

        <div className="usernameDescStarContainer">
          <div className="username">
            <img src={pp} alt="pp" />
            <h2>{username}</h2>
          </div>
          <span className="desc">{desc}</span>
          <div className="star">
            <img src="./img/star.png" alt="star" />
            <span>{star}</span>
          </div>
        </div>
        <div className="heartPriceContainer">
          <img src="./img/heart.png" alt="heart" />
          <div className="price">
            <span>STARTING AT</span>
            {isDecimal && <span className="decimal">{decimalPart}</span>}
            <span className={isDecimal ? "fixPosition" : ""}>
              $ {wholeNumberPart}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

GigCard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    pp: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    star: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default GigCard;
