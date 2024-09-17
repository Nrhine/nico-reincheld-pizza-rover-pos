import './POSPage.scss';
import { useState } from 'react';
import Header from '../../components/POS/Header/Header';
import ItemList from '../../components/POS/ItemsList/ItemList';

function POSPage() {
  const [activeTab, setActiveTab] = useState('PIZZA');

  return (
    <main>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <ItemList />
    </main>
  );
}

export default POSPage;
