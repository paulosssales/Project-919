import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    backgroundColor: #903EAD;
    align-items: center;
    justify-content: space-between;
    padding-top: ${getStatusBarHeight()}px;
`;

export const ImageMain = styled.View`
    padding: 5px;
    height: 300px;
    width: 300px;
`;

export const ButtonEnter = styled.TouchableOpacity`
    margin-bottom: 20%;
    borderRadius: 50px; 
    height: 50px
    width: 200px;
`;

export const TextButtonEnter = styled.Text`
    font-family: Helvetica;
    font-size: 52px;
    font-weight: bold;
    text-align: center;
    color: #E2B920;
`;

export const ImageLogo = styled.Image`
    height: 100%;
    width: 100%;
`;