import React, { useContext } from 'react';
import { Typography, List, Space, Button } from 'antd';
import { DeleteOutlined, HomeOutlined } from '@ant-design/icons';

import carritoContext from '../../contexts/carritoContext';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;

const StyledMeta = styled(List.Item.Meta)`
  text-align: initial;
  padding: 16px;
`;

const StyledList = styled(List)`
  width: 75%;
  margin: auto;
`;

const Cart = () => {
  const history = useHistory();
  const { carrito, removeItem } = useContext(carritoContext);
  
  console.log({carrito});

  const handleClick = () => history.push('/');

  return (
    <>
      <Title level={2}>Carrito</Title>
      {carrito.length > 0 && (
        <StyledList
          itemLayout="vertical"
          size="medium"
          dataSource={carrito}
          bordered
          renderItem={item => (
            <List.Item
              key={item.name}
              actions={[
                <Button danger key={`borrar-${item.id}`}  shape="round" icon={<DeleteOutlined />} onClick={() => removeItem(item.id)}>
                  Sacar del Carrito
                </Button>
              ]}
              extra={
                <img
                  width={250}
                  alt={item.bread}
                  src={item.image}
                />
              }
            >
              <StyledMeta
                title={item.name}
                description={`${item.animal} Raza: ${item.bread} Edad: ${item.age}`}
              />
              {item.description}
            </List.Item>
          )}
        />
      )}
      {carrito.length === 0 && (
        <>
          <Title level={3} type="secondary">Carrito vacio</Title>
          <Button shape="round" icon={<HomeOutlined />} onClick={handleClick}>
            Ver mascotas
          </Button>
        </>
      )}
    </>
  );
};

export default Cart;