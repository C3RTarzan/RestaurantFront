import './styles.scss';
function Input({type, name, placeholder, handleOnChange, value, multiple, maxlength}) {
  return (   
      <input
          maxLength={maxlength}
          type={type} 
          name={name} 
          id={name} 
          placeholder={placeholder} 
          onChange={handleOnChange}
          value={value}
          {...(multiple ? (multiple) : '')}
      ></input>
  );
}
  
export default Input;