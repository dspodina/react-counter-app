import "./DisplayCounter.css";
import PropTypes from "prop-types";

const DisplayCounter = ({ count }) => {
  return <p>{count}</p>;
};

DisplayCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default DisplayCounter;
