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

export default class OneRmResults extends Component<{}> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Heading>{this.props.oneRm}</Heading>

        <Heading>{this.props.test.currentExercise}</Heading>
        <Heading>{this.props.test.oneRms.deadlift.weight}</Heading>
        <Heading>{this.props.test.oneRms.deadlift.reps}</Heading>
       </View>
    );
  }
}

const styles = StyleSheet.create({
})
