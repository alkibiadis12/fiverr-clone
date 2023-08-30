import "./Stars.scss";
import PropTypes from "prop-types";

const Stars = ({ numberOfStars }) => {
  return (
    <div className="stars">
      {Array.from({ length: numberOfStars }).map((_, index) => (
        <img src="/img/star.png" alt="star" key={`star${index}`} />
      ))}
      <span>{numberOfStars}</span>
    </div>
  );
};

Stars.propTypes = {
  numberOfStars: PropTypes.number.isRequired,
};

export default Stars;
