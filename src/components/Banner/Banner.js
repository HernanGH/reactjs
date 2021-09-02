import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

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

const Banner = () => (
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
);

export default Banner;