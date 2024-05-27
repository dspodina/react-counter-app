import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ text, name, onClick }) => {
  return (
    <button onClick={onClick} className={name}>
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
