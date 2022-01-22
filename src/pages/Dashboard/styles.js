import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #903EAD;
  justify-content: space-between;
`;

export const Grid = styled.View`
  flex: 3;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-top-width: 2px;
  border-top-color: #aed6f1;
`;

export const WordGrid = styled.View`
  flex: 6;
  align-items: center;
  justify-content: center; 
  background-color: #FFF;
  border-top-width: 2px;
  border-top-color: #aed6f1;
`;

export const LineGrid = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Items = styled.TouchableOpacity`
  margin: 3px;
  height: 125px;
  width: 125px;
  border: solid 2px #808b96;
`;

export const ButtonExit = styled.TouchableOpacity`
  margin: 5px;
  height: 50px;
  width: 100px;
  background-color: #6B417A;
  border: solid 0.3px #903EAD;
  border-radius: 10px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  margin: 5px;
  height: 50px;
  width: 100px;
  background-color: ${props => (props.disabled ? '#E74C3C' : '#58D68D')};
  border: solid 0.3px #AD8F4C;
  border-radius: 10px;
`;

export const ButtonExitText = styled.Text`
  font-family: impact;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

export const TextWord = styled.Text`
  font-family: impact;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  margin: 10px;
  color: #1ABC9C;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1px;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
  border: 2px solid ${props => (props.error ? '#FF7272' : '#FFF')};
`;

export const Image = styled.Image`
  margin: 10px;
  height: 100px;
  width: 100px;
`;