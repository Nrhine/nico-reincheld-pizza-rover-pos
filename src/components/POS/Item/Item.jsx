import './Item.scss';
import { v4 as uuid } from 'uuid';

function Item({ name, price, taxed, addToOrder }) {
  return (
    <div
      className="item"
      onClick={() => {
        addToOrder({
          id: uuid(), //creates a unique order id number
          name: name,
          price: price,
          taxed: taxed,
          modifications: {
            no: [],
            easy: [],
            extra: [],
            sub: [],
          },
        });
      }}
    >
      <h2 className="item__name">{name}</h2>
      <div className="item__price">{price}</div>
    </div>
  );
}

export default Item;
