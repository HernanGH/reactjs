import React, { createContext, useEffect, useState } from 'react';
import { getDataBase } from '../api/firebase';

// 1 CREACION DE CONTEXTO SIMPLE VACIO
const petContext = createContext({});

export const PetProvider = ({ children }) => {
  // 2 ESTADO QUE QUIERO COMPARTIR
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // 4 OBTENGO LA LISTA DE MASCOTAS DESDE FIRESTORE
    const getPets = async () => {
      const db = getDataBase();
      const petCollection = db.collection('pets');
      const petSnapshot = await petCollection.get();
      const petList = petSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log({petList});
      // 5 actualizo el estado para que se actualicen los compentes que esuchan este context
      setPets(petList);
    };
    getPets();
  }, []);

  return (
    // 3 COMPARTIR EL ESTADO GLOBAL (Provider/value)
    <petContext.Provider value={{ pets, setPets }}>
      {/* componentes hijos  */}
      {children}
    </petContext.Provider>
  );
};

export default petContext;
