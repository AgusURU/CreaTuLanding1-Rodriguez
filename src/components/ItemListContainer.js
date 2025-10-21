import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <p>Aquí se mostrarán los productos de nuestro catálogo próximamente.</p>
    </div>
  );
};

export default ItemListContainer;