import { Button, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useContext } from 'react';
import styled from 'styled-components';
import petContext from '../../contexts/petContext';
import { EyeOutlined, QqOutlined } from '@ant-design/icons';
import carritoContext from '../../contexts/carritoContext';

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 300px;
`;

const Galeria = props => {
  const { pets } = useContext(petContext);
  const { addItem } = useContext(carritoContext);

  const handleClick = (petItem) => {
    addItem(petItem);
  };

  return (
    <div className="TEST">
      {pets.map((petItem) => (
        <StyledCard
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Button shape="round" icon={<EyeOutlined />} onClick={() => handleClick(petItem)}>
              Ver detalles
            </Button>
          ]}
        >
          <Meta
            avatar={<Avatar icon={<QqOutlined />} />}
            title={petItem.name}
            description={petItem.description}
          />
        </StyledCard>
      ))}
    </div>
  );
};

export default Galeria;
