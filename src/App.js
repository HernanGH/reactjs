import './App.css';
import 'antd/dist/antd.css';

import { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { PetProvider } from './contexts/petContext';
import { CarritoProvider } from './contexts/carritoContext';
import ItemList from './containers/ItemList';
import Header from './components/Header';
import Carrito from './components/Carrito/Carrito';
import ItemDetail from './containers/ItemDetail';
import { getDataBase } from './api/firebase';
import Cart from './containers/Cart';

const App = () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  useEffect(() => {
    const getPets = async () => {
      const db = getDataBase();
      const petCollection = db.collection('pets');
      const petSnapshot = await petCollection.get(); // trae todas las mascotas
      console.log(petSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    getPets();
  }, []); 

  useEffect(() => {
    const getCats = async () => {
      const db = getDataBase();
      const petCollection = db.collection('pets');
      const petSnapshot = await petCollection.where('animal', '==', 'gato').get(); // trae solamente los gatos
      console.log(petSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    getCats();
  }, []); 

  useEffect(() => {
    const getYoungers = async () => {
      const db = getDataBase();
      const petCollection = db.collection('pets');
      const petSnapshot = await petCollection.where('age', '<', 5).get(); // trae solamente las mascotas menores a 5
      console.log(petSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    getYoungers();
  }, []); 

  return (
    <div className="App">
      <PetProvider>
        <CarritoProvider>
          <Router basename="/reactjs">
            <Header />
            <Switch>
              <Route exact path="/">
                <ItemList /> 
              </Route>
              <Route path="/item/:id">
                <ItemDetail />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </Router>
        </CarritoProvider>
      </PetProvider>
    </div>
  );
}

export default App;
