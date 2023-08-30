import "./Container.scss";
import PropTypes from "prop-types";

const Container = ({ children, margin = "inherit" }) => {
  return (
    <div className="containerOuter" style={{ margin }}>
      <div className="containerInner">{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  margin: PropTypes.string,
};

export default Container;
