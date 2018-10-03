import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = ({ headerText }) => ( // { headerText } === props.headerText
    <Header 
        centerComponent={{ text: headerText, style: { color: 'white'} }}
        outerContainerStyles={{ backgroundColor: '#2793e8'}}        
    />
);

export default AppHeader;
