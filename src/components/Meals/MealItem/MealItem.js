import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
  const { name, price, description, id } = props;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
