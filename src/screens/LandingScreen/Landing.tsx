import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Landing = () => {
  return (
    <Container>
      <Text>Hello, It's Inbrew!</Text>
    </Container>
  );
};

export default Landing;

const Container = styled.View`
  flex: 1
  justifyContent: center;
  alignItems: center;
`;
