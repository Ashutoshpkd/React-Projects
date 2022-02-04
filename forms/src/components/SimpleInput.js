
import useInput from '../hooks/use-input';

const SimpleInput = () => {

  const validateName = (name) => (name.trim() === '');
  const validateEmail = (email) => (email.trim() === '' || !email.includes('@'))

  const {
    value: enteredName,
    hasError: invalidName,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHAndler,
    reset: resetName,
  } = useInput(validateName);

  const {
    value: email,
    hasError: invalidEmail,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validateEmail);


  const invalid = (invalidName) || (invalidEmail);

  const submitHandler = e => {
    e.preventDefault();
    if(invalid) {
      return;
    }
    console.log(enteredName, email);
    resetName();
    resetEmail();
  }

  const className = invalidName ? 'form-control invalid' : 'form-control';
  const classEmail = invalidEmail ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className={className}>
        <label htmlFor='name'>Your Name</label>
        <input
        type='text'
        id='name'
        onChange={nameChangeHandler}
        value={enteredName}
        onBlur={nameBlurHAndler}
        />
      </div>
      {invalidName && (<p className='error-text'>Name is invalid.</p>)}
      <div className={classEmail}>
        <label htmlFor='name'>Email Address</label>
        <input
        type='email'
        id='email'
        onChange={emailChangeHandler}
        value={email}
        onBlur={emailBlurHandler}
        />
      </div>
      {invalidEmail && (<p className='error-text'>Email is invalid.</p>)}
      <div className="form-actions">
        <button disabled={invalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
