import PropTypes from "prop-types";

const InfoItem = ({ title, desc, img }) => {
  return (
    <>
      <div className="title">
        <img src={img} alt="check" />
        {title}
      </div>
      {desc && <p>{desc}</p>}
    </>
  );
};

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  img: PropTypes.string.isRequired,
};

export default InfoItem;
