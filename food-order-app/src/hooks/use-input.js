import React, { useState } from "react";

const useInput = (validate) => {
    const [value, setValue] = useState('');
    const [isValueTouched, setIsValueTouched] = useState(false);

    const hasError = validate(value) && isValueTouched;

    const changeHandler = (e) => {
        setValue(e.target.value);
    }

    const blurHandler = e => {
        setIsValueTouched(true);
    }

    const reset = () => {
        setIsValueTouched(false);
        setValue('');
    }

    return {
        value,
        hasError,
        changeHandler,
        blurHandler,
        reset,
    }
};

export default useInput;