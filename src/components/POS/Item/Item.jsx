import './Item.scss';

function Item({ name, price, addToOrder, orderLength }) {
  return (
    <div
      className="item"
      onClick={() => {
        addToOrder({
          id: orderLength + 1, //creates a unique order id number
          name: name,
          price: price,
        });
      }}
    >
      <h2 className="item__name">{name}</h2>
      <div className="item__price">{price}</div>
    </div>
  );
}

export default Item;
