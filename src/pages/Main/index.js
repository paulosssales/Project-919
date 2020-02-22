import React from 'react';

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
    setTimeout(() => {
      navigation.navigate('Dashboard');
    }, 1000);
  }

  return (
    <Container>
      <ImageMain>
        <ImageLogo source={logo} />
      </ImageMain>

      <ButtonEnter onPress={navegateToDashboard}>
        <TextButtonEnter> JOGAR </TextButtonEnter>
      </ButtonEnter>
    </Container>
  );
}
