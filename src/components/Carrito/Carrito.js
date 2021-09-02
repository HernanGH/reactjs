import React, { useContext } from 'react';
import { Drawer } from 'antd';
import carritoContext from '../../contexts/carritoContext';

const Carrito = ({ visible, onClose }) => {
  const { carrito } = useContext(carritoContext);

  return (
    <Drawer title="Carrito" placement="right" onClose={onClose} visible={visible}>
      <>
      <h3>{carrito.length > 0 && carrito.length}</h3>
      {carrito.map((item) => (
        <>
          <p>Nombre: {item.name}</p>
          <p>Cantidad: {item.count}</p>
          <p>Raza: {item.bread}</p>
        </>
      ))}
      </>
    </Drawer>
  );
};

export default Carrito;