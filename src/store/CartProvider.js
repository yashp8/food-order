import CartContext from './cart-contex';

const CartProvider = (props) => {
  const addItemToCartHamdler = (item) => {};

  const removeItemToCartHamdler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHamdler,
    removeItem: removeItemToCartHamdler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
