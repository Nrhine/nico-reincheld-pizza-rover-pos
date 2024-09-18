import './ItemList.scss';
import Item from '../Item/Item';
import pizzaMenu from '../../../data/pizza-menu';
import sidesMenu from '../../../data/sides-menu';
import drinksMenu from '../../../data/drinks-menu';

function ItemList({ order, setOrder, addToOrder, activeTab }) {
  return (
    <section className="item-list">
      {activeTab === 'PIZZA' ? (
        pizzaMenu.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} />
        ))
      ) : activeTab === 'SIDES' ? (
        sidesMenu.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} />
        ))
      ) : activeTab === 'DRINKS' ? (
        drinksMenu.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} />
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </section>
  );
}

export default ItemList;
