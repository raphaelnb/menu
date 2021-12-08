import React, { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import items from './data';

const allCategories = ['all',...new Set(items.map((item) => item.category))];
console.log(allCategories);


function App() {
  const [menuItens, setMenuItens] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItens(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItens(newItems);
  };

  return <main>
    <section className="menu section">
      <div className="tittle">
        <h2>cardápio</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItens} />
    </section>
  </main> ;
}

export default App;
