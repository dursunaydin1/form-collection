// eslint-disable-next-line react/prop-types
const RadioButton = ({ id, label, name, defaultChecked }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        defaultChecked={defaultChecked}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
