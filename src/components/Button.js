import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// (props) -> props.onPress destructures to ({ onPress }) -> onpress

// Onpress is a function called when pressed
// Children takes child JSX tags passed in and renders them
const Button = ({onPress, children}) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle}
      onPress={onPress}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

// alignItems -> container positions children
// alightSelf -> position self
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff'
  }
};

export default Button;
