/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import SwipeBanner from './SwipeBanner';
import OneRmResults from './OneRmResults';


export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      index: '0',
      currentExercise: 'benchPress',
      currentOneRm: '205',
      oneRms: {
        benchPress: {
          displayName: 'Bench Press',
          reps: '1',
          weight: '205',
          oneRm: '205'
        },
        deadlift: {
          displayName: 'Deadlift',
          reps: '1',
          weight: '360',
          oneRm: '360'
        },
        overHeadPress: {
          displayName: 'Overhead Press',
          reps: '1',
          weight: '120',
          oneRm: '120'
        },
        squat: {
          displayName: 'Squat',
          reps: '1',
          weight: '250',
          oneRm: '250'
        },
      }
    }
  }

  getOneRm(weight, reps) {
    const  total = weight/ (1.013 - (0.0267123 * reps));
    return Math.ceil(total);
  }

  getCurrentExerciseOneRm() {
    const currentExercise = this.state.currentExercise;
    const currentExerciseObj = this.state.oneRms[currentExercise];
    return currentExerciseObj.oneRm;

  }

  onWeightUpdated(exercise, key, value) {
    let newOneRms = {...this.state.oneRms};
    const weight = newOneRms[exercise].weight;
    const reps = newOneRms[exercise].reps;
    const newOneRm = this.getOneRm(weight, reps);
    newOneRms[exercise][key] = value;
    newOneRms[exercise].oneRm = newOneRm;

    //Update Exercise OneRm
    this.setState({OneRms: newOneRms});

    //update current OneRm
    if (exercise === this.state.currentExercise) {
      this.setState({
        ...this.state,
        currentOneRm: newOneRm
      })

    }

  }

  updateCurrentExercise(index) {
    // const newExercise = Object
    // .keys(this.state.oneRms)
    // .sort()[index];

    // const newOneRm = this.state.oneRms[newExercise].oneRm;

    this.setState({
      currentExercise: 'deadlift',
      currentOneRm: '150'
    });

  }

  render() {
    return (
      <View style={styles.container}>
          <SwipeBanner
          state={this.state}
          onChange={(exercise, weight, reps) => this.onWeightUpdated(exercise, weight, reps)}
          onIndexChanged={(index) => this.updateCurrentExercise(index)}>
          </SwipeBanner>
          <OneRmResults
          test={this.state}
          oneRm={this.state.currentOneRm}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
  }
})
