// Import library to help create Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header'

// create Component. Styling goes inside
const App = () => {
  return (
    <Header headerText={'Albums'}/>
  );
};

// render component to device
AppRegistry.registerComponent('albums', () => App);
