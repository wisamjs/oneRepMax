import React, { Component } from 'react';
import {
  TextInput
} from 'react-native';

const style = {
  width: 100,
  height: 50,
  color: '#fff',
  fontSize: 40,
  textAlign: 'center'
}

const Input = ({onChangeText, value, type='default'}) => {
  return (
   <TextInput
      keyboardType={type}
      returnKeyType="done"
      style={style}
      onChangeText={onChangeText}
      value={value}
    />
  )

}

export default Input;
