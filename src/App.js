import './App.css';
import 'antd/dist/antd.css';

import Header from './components/Header';
import Banner from './components/Banner';
import { PetProvider } from './contexts/petContext';
import Galeria from './containers/Galeria';
import { CarritoProvider } from './contexts/carritoContext';
import { useState } from 'react';
import Carrito from './components/Carrito/Carrito';

const App = () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return (
    <div className="App">
      <PetProvider>
        <CarritoProvider>
          <Header />
          <Banner />
          <button onClick={handleOpen}>Abrir carrito</button>
          <Galeria />
          <Carrito visible={visible} onClose={handleClose} />
        </CarritoProvider>
      </PetProvider>
    </div>
  );
}

export default App;
