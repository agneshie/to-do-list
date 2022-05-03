import './FormInput.styles.scss';

function FormInput({ ...otherProps }) {
  return(
    <input {...otherProps}/>
  );
}

export default FormInput;