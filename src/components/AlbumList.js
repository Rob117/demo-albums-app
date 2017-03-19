// Import React and React.Component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  // We can access this with this.state. It starts empty
  state = { albums: [] };
  // Called when it will be placed on mobile device screen
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
     .then(response => this.setState({ albums: response.data }));
  }

  // All extenders of component require a method render() that returns some JSX
  render() {
    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  };
}

export default AlbumList;
