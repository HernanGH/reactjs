import React, { useState } from 'react';

const ListItem = React.memo(({ item, onClick }) => {
  console.log(`Render Item: `, item.id);

  return (
    <div style={{display: 'flex'}}>
      <li>
        Disponible: {item.enVenta}
      </li>
      <button
        style={{margin: '0 16px'}}
        onClick={() => onClick(item.id)}
      >
        + Aumentar Stock
      </button>
    </div>
  );
});

// CONDITION QUE NUNCA CAMBIA
// , (oldProps, newProps) => oldProps.item.id === newProps.item.id


let id = 0;
const data = [...new Array(500)].map(() => ({ id: id++, enVenta: 0 }));
console.log(data);

const Memoizacion = () => {
  const [lista, setLista] = useState(data);

  const handleClick = (itemId) => {
    const listaBorrador = [...lista];
    const item = listaBorrador.find(({ id }) => id === itemId);
    item.enVenta++;
    console.log({listaBorrador});
    setLista(listaBorrador);
  };

  return (
    <div>
      {lista.map((item) => (
        <ListItem
          key={item.id} // LA KEY SIEMPRE SE TIENE QUE MANDAR ADENTRO DE UN MAP
          item={item}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Memoizacion;