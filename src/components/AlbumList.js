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

  renderAlbums() {
    // Map function in js. Curly braces are the same as <%%>
    return this.state.albums.map(album =>
      // we add a key property so that react can intelligently rerender parts of the list. Key must be unique
      <Text key={album.title}>{album.title}</Text>);
  }

  // All extenders of component require a method render() that returns some JSX
  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  };
}

export default AlbumList;
