/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button } from 'react-native-elements';
import Input from '../components/Input';
import Slide from '../components/slide';
import SwipeBanner from '../components/SwipeBanner';
import Swiper from 'react-native-swiper';



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
    const exercises = Object
      .keys(this.state.oneRms)
      .map((exercise, key) => {
        return <Slide key={key}>
          <Text>{this.state.oneRms[exercise].displayName}</Text>
          <Input
          type="numeric"
          onChangeText={(text) => this.setState({text})}
          value={this.state.oneRms[exercise].kg}
        />
        </Slide>

      })

    return (
      <View style={styles.container}>
        <View style={styles.header} >
        <SwipeBanner>
          {exercises}
        </SwipeBanner>
        </View>
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
  },
  header: {
    height: 100
  },
  wrapper: {
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
