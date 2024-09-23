import './POSPage.scss';
import { useState, useEffect, useRef } from 'react';
import Header from '../../components/POS/Header/Header';
import ItemList from '../../components/POS/ItemsList/ItemList';
import OrderSummary from '../../components/POS/OrderSummary/OrderSummary';
import ItemMods from '../../components/POS/ItemMods/ItemMods';
import { setLocale } from 'yup';

function POSPage() {
  // sets the current tab
  const [activeTab, setActiveTab] = useState('PIZZA');
  // select items by thier id
  const [selectedItemId, setSelectedItemId] = useState(null);
  // order summary list
  const [order, setOrder] = useState([]);
  // sets mod type
  const [selectedModType, setSelectedModType] = useState(null);
  // makes a list of all mod options added to a line item
  const [modifications, setModifications] = useState({
    no: [],
    easy: [],
    extra: [],
    sub: [],
  });

  // keeps track of the order length to preserve the selected item
  const prevOrderLengthRef = useRef(order.length);

  // selects item from the order summary
  const handleSelectItem = (id) => {
    setSelectedItemId(id);
  };

  // updates selected item to the most recently added
  useEffect(() => {
    if (order.length > prevOrderLengthRef.current) {
      // A new item was added
      setSelectedItemId(order[order.length - 1].id);
    } else if (order.length === 0) {
      setSelectedItemId(null);
    }
    // Update the ref with the current order length
    prevOrderLengthRef.current = order.length;
  }, [order]);

  // removes item from the order summary
  const handleRemoveItem = (id) => {
    const updatedOrder = order.filter((item) => item.id !== id);
    setOrder(updatedOrder);

    // Update the selected item ID based on the new order state
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
            setOrder={setOrder}
            selectedItemId={selectedItemId}
            handleSelectItem={handleSelectItem}
            handleRemoveItem={handleRemoveItem}
            setModifications={setModifications}
            modifications={modifications}
          />
          <ItemMods
            order={order}
            setOrder={setOrder}
            addToOrder={addToOrder}
            selectedItemId={selectedItemId}
            handleRemoveItem={handleRemoveItem}
            selectedModType={selectedModType}
            setSelectedModType={setSelectedModType}
            setModifications={setModifications}
          />
        </section>
      </section>
    </main>
  );
}

export default POSPage;
