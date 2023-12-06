// eslint-disable-next-line react/prop-types
const Input = ({ changeHandler, val }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
        value={val}
      ></input>
    </>
  );
};
export default Input;
