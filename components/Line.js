import React, { Component } from 'react';
import { View } from 'react-native';

const styles = {
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    colorLine: {
    borderWidth: 1,
    borderColor: '#DA0014'
  },
  defaultLine: {
    borderWidth: 1,
    borderColor: '#FFF'
  }
}

const totalWidth = 350;

const Line = ({percent}) => {
  const colorLineStyles = {
    ...styles.colorLine,
    width: totalWidth * percent
  }

  const defaultLineStyles = {
    ...styles.defaultLine,
    width: totalWidth * (1 - percent)
  }

  return (
    <View style={styles.container}>
    <View style={colorLineStyles}></View>
    <View style={defaultLineStyles}></View>
    </View>
  )

}

export default Line;
