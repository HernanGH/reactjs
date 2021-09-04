import React, { createContext, useState } from 'react';

const checkearItemCantidad = (list, item) => {
  const petEncontrado = list.find(pet => pet.id === item.id);

  if (petEncontrado) {
    petEncontrado.count++; 
  }else {
    list.push({
      ...item,
      count: 1
    });
  }
  return list;
};

// 1 CREACION DE CONTEXTO SIMPLE VACIO
const carritoContext = createContext({});

export const CarritoProvider = ({ children }) => {
  // 2 ESTADO QUE QUIERO COMPARTIR
  const [carrito, setCarrito] = useState([]);
  
  const addItem = (item) => {
    const carritoDraft = [...carrito];
    const cleanCarrito = checkearItemCantidad(carritoDraft, item)
    setCarrito(cleanCarrito);
  };

  const removeItem = (itemId) => {
    const carritoDraft = [...carrito];
    const cleanCarrito = carritoDraft.filter(item => item.id !== itemId);
    setCarrito(cleanCarrito);
  };

  return (
    // 3 COMPARTIR EL ESTADO GLOBAL (Provider/value)
    <carritoContext.Provider value={{ carrito, addItem, removeItem }}>
      {/* componentes hijos  */}
      {children}
    </carritoContext.Provider>
  );
};

export default carritoContext;
