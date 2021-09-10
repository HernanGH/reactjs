import React from 'react';

const Optimizacion = () => {
  const saludar = () => {
    alert('HOLA');
  };

  const despedir = () => {
    alert('CHAU');
  };

  return (
    <div>
      <h2>Optimizacion</h2>
      <button onClick={saludar}>Saludar</button>
      <button onClick={despedir}>Despedir</button>
    </div>
  );
};

export default Optimizacion;