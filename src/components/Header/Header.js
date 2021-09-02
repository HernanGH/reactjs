import React from 'react';
import styled from "styled-components";
import { PageHeader, Button } from 'antd';

const StyledPageHeader = styled(PageHeader)`
  border-bottom: 1px solid grey;
`;

const Header = () => (<StyledPageHeader
  ghost={false}
  title="Mascotas"
  subTitle="Adopta responsablemente"
  extra={[
    <Button key="2">Mascotas</Button>,
    <Button key="1">Carrito</Button>
  ]}
/>);

export default Header;
