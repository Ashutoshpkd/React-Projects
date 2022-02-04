import useInput from '../../../hooks/use-input';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    const isEmpty = (value) => (
        value.trim() === ''
    );
  
    function isNumber(str){
      return !(!/\D/.test(str));
    }
  
    const { value: name,
            hasError: invalidName,
            changeHandler: nameChange,
            blurHandler: nameBlur,
            reset: resetName,
          } = useInput(isEmpty);
  
    const { value: city,
      hasError: invalidCity,
      changeHandler: cityChange,
      blurHandler: cityBlur,
      reset: resetCity,
      } = useInput(isEmpty);
  
  const { value: street,
      hasError: invalidStreet,
      changeHandler: streetChange,
      blurHandler: streetBlur,
      reset: resetStreet,
      } = useInput(isEmpty);
  
      const { value: code,
      hasError: invalidCode,
      changeHandler: codeChange,
      blurHandler: codeBlur,
      reset: resetCode,
      } = useInput(isNumber);

  const confirmHandler = (event) => {
    event.preventDefault();
    console.log(invalidCity,invalidCode,invalidName,invalidStreet)

    if((invalidCity || invalidCode || invalidName || invalidStreet)) {
        console.log('Invalid Inputs')
        return;
    }

    const userData = {
        name: name,
        city: city,
        street: street,
        postalCode: code,
    }

    props.onConfirm(userData);
    console.log(userData);
    resetCity();
    resetCode();
    resetName();
    resetStreet();

  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChange} onBlur={nameBlur} value={name}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' onChange={streetChange} onBlur={streetBlur} value={street}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' onBlur={codeBlur} onChange={codeChange} value={code}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' onChange={cityChange} onBlur={cityBlur} value={city}/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;