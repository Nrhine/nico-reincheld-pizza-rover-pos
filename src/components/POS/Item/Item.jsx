import './Item.scss';

function Item({ name, price }) {
  return (
    <div className="item">
      <h2 className="item__name">{name}</h2>
      <div class="item__price">{price}</div>
    </div>
  );
}

export default Item;
