import React from 'react';

// import { Products } from './components/Products';
import CardList from './components/CardList';

import './index.css';

function App() {
  return (
    <div className="bg-gray-100 h-screen overflow-auto">
      <CardList />
    </div>
  );
}

export default App;
