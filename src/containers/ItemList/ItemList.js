import { Button, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { EyeOutlined, QqOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import petContext from '../../contexts/petContext';
import carritoContext from '../../contexts/carritoContext';
import Banner from '../../components/Banner';
import { useHistory } from 'react-router-dom';

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 300px;
`;

const Galery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 32px;
  padding-bottom: 64px;
`;

const ItemList = () => {
  const history = useHistory();
  const { pets } = useContext(petContext);
  const { addItem } = useContext(carritoContext);

  const handleClick = (petItem) => {
    addItem(petItem);
  };

  const handleNavigationDetail = (id) => {
    history.push(`/item/${id}`);
  };

  console.log({pets})
  return (
    <>
      <Banner />
      <Galery>
        {pets.map((petItem) => (
          <StyledCard
            key={petItem.id}
            cover={
              <img
                alt={petItem.bread}
                src={petItem.image}
              />
            }
            actions={[
              <Button shape="round" icon={<ShoppingCartOutlined  />} onClick={() => handleClick(petItem)}>
                Adoptar
              </Button>,
              <Button shape="round" icon={<EyeOutlined />} onClick={() => handleNavigationDetail(petItem.id)}>
                Ver mascota
              </Button>
            ]}
          >
            <Meta
              avatar={<Avatar icon={<QqOutlined />} />}
              title={petItem.name}
              description={`${petItem.animal} - ${petItem.bread} (${petItem.age}) ${petItem.description}`}
            />
          </StyledCard>
        ))}
      </Galery>
    </>
  );
};

export default ItemList;
