import React from 'react';

import { StatusBar } from 'react-native';

import logo from '~/assets/icons/logo/Loading_pc.png';

import {
  Container,
  ImageLogo,
  ImageMain,
  ButtonEnter,
  TextButtonEnter,
} from './styles';

export default function Main({ navigation }) {

  
  function navegateToDashboard() {
    navigation.navigate('Dashboard');
  }
  
  return (
    <Container>
      
      <StatusBar barStyle="light-content" backgroundColor="#903EAD" />

      <ImageMain>
        <ImageLogo source={logo} />
      </ImageMain>

      <ButtonEnter onPress={navegateToDashboard}>
        <TextButtonEnter> JOGAR </TextButtonEnter>
      </ButtonEnter>

      
    </Container>
  );
}
