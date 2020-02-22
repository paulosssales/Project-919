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
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);

  let i = 0;

  const [nome, setNome] = useState([]);

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
    
    setError(false);
  }, [ image ]);

  function navigateToMain() {
    navigation.navigate('Main');
  }

  function randomNu() {
    

    if ( image?.nome == input ) {
      ToastAndroid.showWithGravity(
        image?.nome + ' nome: ',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );

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

  function verificarSeGanhou() {
    randomNu();
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#2e86c1" />
      <ButtonExit title="Navigate to Main" onPress={navigateToMain}>
        <ButtonExitText> SAIR </ButtonExitText>
      </ButtonExit>
      <Grid>
        <LineGrid>
          <Items onPress={verificarSeGanhou}>
            <Image source={image == '' ? randomNu() : image?.src} />
          </Items>
        </LineGrid>
      </Grid>

      {/* <Grid>
        <LineGrid>
          <Items onPress={verificarSeGanhou}>
            <Image source={logoVirus6} />
          </Items>

          <Items onPress={verificarSeGanhou}>
            <Image source={logoVirus7} />
          </Items>

          <Items onPress={verificarSeGanhou}>
            <Image source={logoConnection8} />
          </Items>
        </LineGrid>
      </Grid>
      <Grid>
        <LineGrid>
          <Items onPress={verificarSeGanhou}>
            <Image source={logoVirusTransmission4} />
          </Items>

          <Items onPress={verificarSeGanhou}>
            <Image source={logoPipette5} />
          </Items>

          <Items onPress={verificarSeGanhou}>
            <Image source={logoWorldwide9} />
          </Items>
        </LineGrid>
      </Grid> */}
      <WordGrid>
        <LineGrid>
          <Input
            value={input}
            error={error}
            onChangeText={setInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Procurar repositório..."
          />
          <ButtonConfirm 
            disabled={input == '' ? true : false}  
            onPress={verificarSeGanhou} 
          >
            <ButtonExitText> Conf </ButtonExitText>
          </ButtonConfirm>
        </LineGrid>

        <LineGrid>
          <TextWord>
            Pontos : {score}
          </TextWord>
        </LineGrid>
        
      </WordGrid>
      {/* <WordGrid>
        <LineGrid>
          <TextWord> 4 Bomba </TextWord>

          <TextWord> 5 Mão </TextWord>

          <TextWord> 6 Célula </TextWord>
        </LineGrid>
      </WordGrid>
      <WordGrid>
        <LineGrid>
          <TextWord> 7 Pessoas </TextWord>

          <TextWord> 8 Conta Gota </TextWord>

          <TextWord> 9 Planeta </TextWord>
        </LineGrid>
      </WordGrid> */}
    </Container>
  );
}
