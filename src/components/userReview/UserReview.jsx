import "./UserReview.scss";
import PropTypes from "prop-types";
import Stars from "../stars/Stars";
import { LiaFlagUsaSolid } from "react-icons/lia";

const UserReview = ({
  pp,
  username,
  nationality,
  numberOfStars,
  reviewText,
}) => {
  return (
    <div className="userReview">
      <div className="userInfo">
        <img src={pp} alt="user-image" />
        <div className="nameNationalityContainer">
          <span>{username}</span>
          <div>
            <LiaFlagUsaSolid />
            <span>{nationality}</span>
          </div>
        </div>
      </div>
      <Stars numberOfStars={numberOfStars} />
      <p>{reviewText}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/img/like.png" alt="like" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="dislike" />
        <span>No</span>
      </div>
      <hr />
    </div>
  );
};

UserReview.propTypes = {
  pp: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  numberOfStars: PropTypes.number.isRequired,
  reviewText: PropTypes.string.isRequired,
};

export default UserReview;
