import { useState } from 'react';
import { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const { id, onAddToCart } = props;
  const [amountIsValid, setIsAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value * 1;
    // const enteredAmountNumber = amountInputRef.current.value * 1;
    if (enteredAmount < 1) {
      setIsAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount</p>}
    </form>
  );
};

export default MealItemForm;
