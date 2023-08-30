import "./FooterItem.scss";
import PropTypes from "prop-types";

const FooterItem = ({ title, linksArray }) => {
  return (
    <div className="footerItem">
      <h2>{title}</h2>
      {linksArray.map((link) => (
        <span key={link}>{link}</span>
      ))}
    </div>
  );
};

FooterItem.propTypes = {
  title: PropTypes.string.isRequired,
  linksArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FooterItem;
