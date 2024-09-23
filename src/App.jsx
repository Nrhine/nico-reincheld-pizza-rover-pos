import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import DirectoryPage from './pages/DirectoryPage/DirectoryPage';
import POSPage from './pages/POSPage/POSPage';

import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/POS" element={<POSPage />} />
          {/* <Route path='/admin' element={AdminPage} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
