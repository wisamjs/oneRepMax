import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import Input from '../components/Input';
import Slide from '../components/slide';
import Heading from '../components/Heading';
import OneRmForm from './OneRmForm';

const styles = {
  container: {
    height: 150,
    paddingTop: 15,
    backgroundColor: '#DA0014'
  },
  view: {
    height: 100,
    flex: 1
  },
  pagination: {
    bottom: 15
  }
}

export default class OneRmCalculator extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  getExercises() {
    return Object
      .keys(this.state.oneRms)
      .sort()
      .map((exercise, key) => {
        const name = this.state.oneRms[exercise].displayName;
        const weight = this.state.oneRms[exercise].weight;
        const reps= this.state.oneRms[exercise].reps;
        return <Slide key={key}>
          <OneRmForm
          name={name}
          weight={weight}
          reps={reps}
          onChangeText={(key, value) => this.props.onChange(exercise, key, value)}/>
        </Slide>
    })
}

  render() {
    const exercises = this.getExercises();

    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Swiper
          dot={<View></View>}
          activeDot = {<View></View>}
          paginationStyle={styles.pagination}
          showsButtons={false}
          showsHorizontalScrollIndicator={false}
          onIndexChanged={(index)=> this.props.onIndexChanged(index)}>
            {exercises}
          </Swiper>
        </View>
      </View>
    )
  }
}

// {

// }
