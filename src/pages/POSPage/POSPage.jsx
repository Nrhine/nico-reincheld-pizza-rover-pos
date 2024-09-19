import './POSPage.scss';
import { useState, useEffect } from 'react';
import Header from '../../components/POS/Header/Header';
import ItemList from '../../components/POS/ItemsList/ItemList';
import OrderSummary from '../../components/POS/OrderSummary/OrderSummary';
import { setLocale } from 'yup';

function POSPage() {
  const id = 1;

  // sets the current tab
  const [activeTab, setActiveTab] = useState('PIZZA');
  // select items by thier id
  const [selectedItemId, setSelectedItemId] = useState(null);
  // order summary list
  const [order, setOrder] = useState([]);

  // selects item from the order summary
  const handleSelectItem = (id) => {
    setSelectedItemId(id);
  };

  // updates selected item to the most recently added
  useEffect(() => {
    if (order.length > 0) {
      setSelectedItemId(order[order.length - 1].id);
    } else {
      setSelectedItemId(null);
    }
    console.log(order);
  }, [order]);

  // removes item from the order summary
  const handleRemoveItem = (id) => {
    const updatedOrder = setOrder(order.filter((item) => item.id !== id));
    setSelectedItemId(updatedOrder);

    if (updatedOrder.length > 0) {
      setSelectedItemId(updatedOrder[updatedOrder.length - 1].id);
    } else {
      setSelectedItemId(null);
    }
  };

  // add item to the order summary
  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  return (
    <main>
      <section className="pos">
        <section className="pos__left">
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          <ItemList
            order={order}
            setOrder={setOrder}
            addToOrder={addToOrder}
            activeTab={activeTab}
          />
        </section>
        <section className="pos__right">
          <OrderSummary
            order={order}
            selectedItemId={selectedItemId}
            handleSelectItem={handleSelectItem}
            handleRemoveItem={handleRemoveItem}
          />
        </section>
      </section>
    </main>
  );
}

export default POSPage;
