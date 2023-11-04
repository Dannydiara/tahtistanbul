import "./Button.scss";
import PropTypes from "prop-types"

const Button = ({ text, icon, style, link }) => {
  return (
    <a href={link} className="button" style={style}>
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </a>
  );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.element,
    style: PropTypes.object,
    link: PropTypes.string.isRequired,
};

export default Button;