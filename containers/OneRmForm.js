import React, { Component } from 'react';
import {
  Platform,
  Text,
  StyleSheet,
  View
} from 'react-native';

import SwipeBanner from './SwipeBanner';
import Swiper from 'react-native-swiper';
import Input from '../components/Input';
import Slide from '../components/slide';
import Heading from '../components/Heading';

export default class OneRmForm extends Component<{}> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
       <Heading>
        {this.props.name}
       </Heading>
       <View style={styles.subcontainer}>
        <Input
        type="numeric"
        onChangeText={(weight) => this.props.onChangeText('weight', weight)}
        value={this.props.weight}/>
        <Text style={styles.text}>x</Text>
        <Input
        type="numeric"
        onChangeText={(reps) => this.props.onChangeText('reps',reps)}
        value={this.props.reps}/>
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  subcontainer: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30
  }
})
