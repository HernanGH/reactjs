import './App.css';
import 'antd/dist/antd.css';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import { PetProvider } from './contexts/petContext';
import Galeria from './containers/Galeria';
import { CarritoProvider } from './contexts/carritoContext';
import Carrito from './components/Carrito/Carrito';
import { getDataBase } from './api/firebase';

const App = () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  useEffect(() => {
    const getPets = async () => {
      const db = getDataBase();
      const petCollection = db.collection('pets');
      const petSnapshot = await petCollection.get();
      console.log(petSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    getPets();
  }, []); 

  useEffect(() => {
    const getCats = async () => {
      const db = getDataBase();
      const petCollection = db.collection('pets');
      const petSnapshot = await petCollection.where('animal', '==', 'gato').get();
      console.log(petSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    getCats();
  }, []); 

  useEffect(() => {
    const getYoungers = async () => {
      const db = getDataBase();
      const petCollection = db.collection('pets');
      const petSnapshot = await petCollection.where('age', '<', 5).get();
      console.log(petSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    getYoungers();
  }, []); 

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
