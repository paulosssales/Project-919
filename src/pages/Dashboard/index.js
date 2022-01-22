import React, {useState, useEffect} from 'react';

import {ToastAndroid, StatusBar} from 'react-native';

import logoVirus from '~/assets/icons/dashboard/001-virus.png';
import logoQuarantine2 from '~/assets/icons/dashboard/002-quarantine.png';
import logoVirus3 from '~/assets/icons/dashboard/003-virus.png';
import logoVirusTransmission4 from '~/assets/icons/dashboard/004-virus_transmission.png';
import logoPipette5 from '~/assets/icons/dashboard/005-pipette.png';
import logoVirus6 from '~/assets/icons/dashboard/006-virus.png';
import logoVirus7 from '~/assets/icons/dashboard/007-virus.png';
import logoConnection8 from '~/assets/icons/dashboard/008-connection.png';
import logoWorldwide9 from '~/assets/icons/dashboard/009-worldwide.png';

// Icons made by <a href="https://www.flaticon.com/authors/freepik"
// title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
// title="Flaticon"> www.flaticon.com</a>

import {
  Container,
  ButtonExit,
  Grid,
  ButtonExitText,
  LineGrid,
  Items,
  Image,
  WordGrid,
  ButtonConfirm,
  Input,
  TextWord,
} from './styles';

export default function Dashboard({navigation}) {
  const [image, setImage] = useState([]);
  const [image1, setImage1] = useState([]);
  const [image2, setImage2] = useState([]);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  
  let i = 0;

  const nomeArray = [
    {id: 0, nome: 'Virus', src: logoVirus},
    {id: 1, nome: 'Sino', src: logoQuarantine2},
    {id: 2, nome: 'Lupa', src: logoVirus3},
    {id: 3, nome: 'Bomba', src: logoVirus6},
    {id: 4, nome: 'Mão', src: logoVirus7},
    {id: 5, nome: 'Célula', src: logoConnection8 },
    {id: 6, nome: 'Pessoas', src: logoVirusTransmission4},
    {id: 7, nome: 'Conta Gota', src: logoPipette5},
    {id: 8, nome: 'Planeta', src: logoWorldwide9},
  ];

  useEffect(() => {
    
    if (image == '' ) {
      i = (Math.random() * 8).toFixed(0);
      setImage({
        id: nomeArray[i].id,
        nome: nomeArray[i].nome,
        src: nomeArray[i].src,
      });
    }

    if (image1 == '' ) {
      i = (Math.random() * 8).toFixed(0);
      setImage1({
        id: nomeArray[i].id,
        nome: nomeArray[i].nome,
        src: nomeArray[i].src,
      });
    }

    if (image2 == '' ) {
      i = (Math.random() * 8).toFixed(0);
      setImage2({
        id: nomeArray[i].id,
        nome: nomeArray[i].nome,
        src: nomeArray[i].src,
      });
    }
    
    setError(false);
  }, [ image ]);

  function navigateToMain() {
    navigation.navigate('Main');
  }

  function randomNu() {
    

    if ( image?.nome.toLowerCase() == input.toLowerCase() ) {

      i = (Math.random() * 8).toFixed(0);

      setImage({
        id: nomeArray[i].id,
        nome: nomeArray[i].nome,
        src: nomeArray[i].src,
      });
      setInput('');
      setScore(score+1);

    } 

    if(input != ''){
      
      setError(true);

    }
    
  }

  function nomeText(im) {
    ToastAndroid.showWithGravity(
      ' nome: ' + im.nome,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }

  function verificarSeGanhou() {
    randomNu();
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#903EAD" />

      <ButtonExit title="Navigate to Main" onPress={navigateToMain}>
        <ButtonExitText> SAIR </ButtonExitText>
      </ButtonExit>

      <Grid>
        <LineGrid>
          <Items onPress={nomeText(image)}>
            <Image source={image == '' ? randomNu() : image.src} />
          </Items>
          <Items onPress={nomeText(image1)}>
            <Image source={image1 == '' ? randomNu() : image1.src} />
          </Items>
          <Items onPress={nomeText(image2)}>
            <Image source={image2 == '' ? randomNu() : image2.src} />
          </Items>
        </LineGrid>
      </Grid>

      <WordGrid>
        <LineGrid>
          <Input
            value={input}
            error={error}
            onChangeText={setInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Clique numa imagem..."
          />
          <ButtonConfirm 
            disabled={input == '' ? true : false}  
            onPress={verificarSeGanhou} 
            >
            <ButtonExitText> Ok </ButtonExitText>
          </ButtonConfirm>

        </LineGrid>

        <LineGrid>
          <TextWord>
            Pontos : {score}
          </TextWord>
        </LineGrid>
        
      </WordGrid>

    </Container>
  );
}
