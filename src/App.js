import './App.css';
import 'antd/dist/antd.css';
import { Button, Card, Carousel, PageHeader } from 'antd';
import { EyeOutlined, QqOutlined } from '@ant-design/icons';

import styled from 'styled-components';
import Avatar from 'antd/lib/avatar/avatar';

const StyledPageHeader = styled(PageHeader)`
  border-bottom: 1px solid grey;
`;

const StyledCard = styled(Card)`
  width: 300px;
`;

const Image = styled.h3`
  height: 300px;
  line-height: 160px;
  text-align: center;
  background: #364d79;
  background-image: url(https://source.unsplash.com/featured/?pet,mascot,puppy,${({animal}) => animal}&orientation=landscape);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const { Meta } = Card;

const App = () => {
  return (
    <div className="App">
      <StyledPageHeader
        ghost={false}
        title="Mascotas"
        subTitle="Adopta responsablemente"
        extra={[
          <Button key="2">Mascotas</Button>,
          <Button key="1">Carrito</Button>
        ]}
      />
       <Carousel autoplay effect="fade">
        <div>
          <Image animal="dog"/>
        </div>
        <div>
          <Image animal="cat"/>
        </div>
        <div>
          <Image animal="rabbit"/>
        </div>
      </Carousel>
      <StyledCard
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <Button shape="round" icon={<EyeOutlined />}>
            Ver detalles
          </Button>
        ]}
      >
        <Meta
          avatar={<Avatar icon={<QqOutlined />} />}
          title="Card title"
          description="This is the description"
        />
      </StyledCard>
    </div>
  );
}

export default App;
