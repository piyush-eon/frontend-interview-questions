const Checkbox = ({ title, state, onChange }) => {
  return (
    <div>
      <input type="checkbox" onChange={onChange} checked={state} />
      <label>{title}</label>
    </div>
  );
};

export default Checkbox;
