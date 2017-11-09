import React, { Component } from 'react';
import {
  Platform,
  Text,
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import SwipeBanner from './SwipeBanner';
import Swiper from 'react-native-swiper';
import Line from '../components/Line';
import Slide from '../components/slide';
import Heading from '../components/Heading';

export default class OneRmResults extends Component<{}> {

  constructor(props) {
    super(props);
    this.coefficients = {
      1: {
        coefficient: 1.000
      },
      2: {
        coefficient: 1.066
      },
      3: {
        coefficient: 1.099
      },
      4: {
        coefficient: 1.132
      },
      5: {
        coefficient: 1.165
      },
      6: {
        coefficient: 1.198
      },
      7: {
        coefficient: 1.231
      },
      8: {
        coefficient: 1.264
      },
      9: {
        coefficient: 1.297
      },
      10: {
        coefficient: 1.330
      }
    }

  }

  getAllRms() {
    return [1,2,3,4,5,6,7,8,9,10]
    .map((rep) => {
      return Math.round(Number.parseInt(this.props.oneRm) / this.coefficients[''+rep].coefficient);
    })
  }


  render() {
    const oneRms = this.getAllRms()
    .map((oneRm, index)=> {
      return <View key={index}>
        <View style={styles.rmContainer}>
          <Text style={styles.rmLabel}>{index + 1} Rm</Text>
          <Text style={styles.rmValue}>{oneRm}</Text>
          </View>
        <Line percent={ 1 - (index/10)}/>
        </View>
    })

    return (
       <FlatList
       style={styles.listContainer}
       data={oneRms}
         renderItem={({item}) => item}
        />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1
  },
  rmContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    // borderBottomWidth: 2,
    // borderBottomColor: '#fff',
    marginTop: 40,
  },
  rmValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  rmLabel: {
    fontSize: 20,
    color: '#fff'
  }
})
