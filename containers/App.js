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


export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      oneRms: {
        deadlift: {
          displayName: 'Deadlift',
          kg: '100'
        },
        squat: {
          displayName: 'Squat',
          kg: '200'
        },
        benchPress: {
          displayName: 'Bench Press',
          kg: '150'
        },
        overHeadPress: {
          displayName: 'Overhead Press',
          kg: '65'
        }
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <SwipeBanner
          state={this.state}>
          </SwipeBanner>
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
