import './input.scss';

const Input = (props) => {
  const { type, placeholder, setValue, value } = props;
  return (
    <input
      className="input"
      onChange={(event) => setValue(event.target.value)}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
