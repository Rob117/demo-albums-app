// Import library to help create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create Component. Styling goes inside
// We wrap all of our components in a view tag because we can only return
// a single top-level object
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// render component to device
AppRegistry.registerComponent('albums', () => App);
