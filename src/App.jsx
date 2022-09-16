import React from 'react';

// import { Products } from './components/Products';
import Header from './components/header/Header';
import CardList from './components/CardList';

import './index.css';

function App() {
  return (
    <div className="h-screen overflow-auto bg-gray-100">
      <Header />
      <CardList />
    </div>
  );
}

export default App;
