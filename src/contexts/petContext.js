import React, { createContext, useState } from 'react';
import initialPets from '../api/pets';


// 1 CREACION DE CONTEXTO SIMPLE VACIO
const petContext = createContext({});

export const PetProvider = ({ children }) => {
  // 2 ESTADO QUE QUIERO COMPARTIR
  const [pets, setPets] = useState(initialPets);

  return (
    // 3 COMPARTIR EL ESTADO GLOBAL (Provider/value)
    <petContext.Provider value={{ pets, setPets }}>
      {/* componentes hijos  */}
      {children}
    </petContext.Provider>
  );
};

export default petContext;
