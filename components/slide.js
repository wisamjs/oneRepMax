import React, { Component } from 'react';
import {
  View
} from 'react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20
};

const Slide = ({children}) => {
  return (
    <View
    style={style}>
      {children}
    </View>
  )

}

export default Slide;
