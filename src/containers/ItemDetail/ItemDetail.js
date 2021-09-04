import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Meta from 'antd/lib/card/Meta';
import { Spin } from 'antd';
import { ShoppingCartOutlined, QqOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { getDataBase } from '../../api/firebase';
import carritoContext from '../../contexts/carritoContext';


const StyledCard = styled(Card)`
  width: 600px;
`;

const Detail = styled.div`
  margin: 32px;
  display: flex;
  justify-content: center;
`;

const ItemDetail = () => {
  const { addItem } = useContext(carritoContext);
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const handleClick = () => addItem(pet);

  useEffect(() => {
    const getPet = async (id) => {
      setLoading(true);
      const db = getDataBase();
      const petReference = db.collection('pets').doc(id);
      const petSnapshot = await petReference.get();
      setPet({
        id: id,
        ...petSnapshot.data()
      });
      setLoading(false);
    };
    getPet(id);
  }, []);

  return (
    <Detail>
      {loading && (<Spin />)}
      {!loading && (<StyledCard
        key={pet.id}
        cover={
          <img
            alt={pet.bread}
            src={pet.image}
          />
        }
        actions={[
          <Button shape="round" icon={<ShoppingCartOutlined />} onClick={() => handleClick(pet)}>
            Agregar al Carrito
          </Button>
        ]}
      >
        <Meta
          avatar={<Avatar icon={<QqOutlined />} />}
          title={pet.name}
          description={`${pet.animal} - ${pet.bread} (${pet.age}) ${pet.description}`}
        />
      </StyledCard>)}
    </Detail>
  );
};

export default ItemDetail;
