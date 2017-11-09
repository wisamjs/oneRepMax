import React from 'react';
import {
  Text
} from 'react-native';

const style = {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold'
}

const Heading = ({children}) => {
  return (
    <Text style={style}>{children}</Text>
  )

}

export default Heading;
