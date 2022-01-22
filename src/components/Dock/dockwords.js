import React from 'react';

import {Container} from './styles';

export default function Dock({data, onCheckGain}) {
  return (
    <Container>
      <WordGrid>
        <LineGrid>
          <TextWord> ${data.nome} </TextWord>
        </LineGrid>
      </WordGrid>
    </Container>
  );
}
