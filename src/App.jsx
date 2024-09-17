import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import POSPage from './pages/POSPage/POSPage';

import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={LoginPage} /> */}
          {/* <Route path='/directory' element={DirectoryPage} /> */}
          <Route path="/" element={<POSPage />} />
          {/* <Route path='/admin' element={AdminPage} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
