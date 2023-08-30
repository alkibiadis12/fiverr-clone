import "./CatCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CatCard = ({ item }) => {
  const { img, title, desc } = item;
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={img} alt={title} />
        <span className="desc">{desc}</span>
        <span className="title">{title}</span>
      </div>
    </Link>
  );
};

CatCard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default CatCard;
