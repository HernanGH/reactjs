import React from 'react';
import styled from "styled-components";
import { PageHeader } from 'antd';
import { NavLink } from 'react-router-dom';

const StyledPageHeader = styled(PageHeader)`
  border-bottom: 1px solid grey;
`;

const StyledLink = styled(NavLink)`
  color: grey;
`;

const Header = () => (
  <StyledPageHeader
    ghost={false}
    title="Mascotas"
    subTitle="Adopta responsablemente"
    extra={[
      <StyledLink exact to="/" activeStyle={{color: 'black' }}>Home</StyledLink>,
      <StyledLink to="/cart" activeStyle={{color: 'black' }} >Carrito</StyledLink>
    ]}
  />
);

export default Header;
