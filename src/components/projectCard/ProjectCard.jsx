import "./ProjectCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
  const { img, pp, cat, username } = item;
  return (
    <Link to="/" className="link">
      <div className="projectCard">
        <img src={img} alt="gig" />

        <div className="pp-cat-username">
          <img src={pp} alt="gig-icon" />
          <div>
            <h2>{cat}</h2>
            <span>{username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    pp: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
