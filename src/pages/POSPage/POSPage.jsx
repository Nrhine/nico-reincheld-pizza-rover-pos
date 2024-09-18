import './POSPage.scss';
import { useState } from 'react';
import Header from '../../components/POS/Header/Header';
import ItemList from '../../components/POS/ItemsList/ItemList';

function POSPage() {
  const [activeTab, setActiveTab] = useState('PIZZA');
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  return (
    <main>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <ItemList
        order={order}
        setOrder={setOrder}
        addToOrder={addToOrder}
        activeTab={activeTab}
      />
    </main>
  );
}

export default POSPage;
