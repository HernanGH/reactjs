import React from 'react';
import Loader from '../Loader/Loader';
import Conditionals from './Conditionals';
import Memoizacion from './Memoizacion';

const condition = false;

const Clase11 = () => (
  <>
    <h1>CLASE 11</h1>
    {/* <Conditionals /> */}
    <Memoizacion />
    {/* <Loader /> */}
    {/* // condition === true  !!condition */}
    {/* {condition && <h4>TODO CARGADO</h4>}  */}

    {/* // condition === false */}
    {/* {!condition && <h4>CARGANDO...</h4>} */}
  </>
);


export default Clase11;