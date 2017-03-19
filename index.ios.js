// Import library to help create Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
// create Component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};
// render component to device
AppRegistry.registerComponent('albums', () => App);
