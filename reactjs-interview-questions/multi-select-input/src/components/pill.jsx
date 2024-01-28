/* eslint-disable react/prop-types */
const Pill = ({image, text, onClick}) => {
  return (
    <span className="user-pill" onClick={onClick}>
      <img src={image} alt={text} />
      <span>{text} &times;</span>
    </span>
  );
};

export default Pill;
