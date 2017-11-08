import React, { Component } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import Input from '../components/Input';
import Slide from '../components/slide';
import Heading from '../components/Heading';

const styles = {
  container: {
    height: 100,
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

export default class SwipeBanner extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  render() {
    const exercises = Object
      .keys(this.state.oneRms)
      .map((exercise, key) => {
        return <Slide key={key}>
          <Heading>{this.state.oneRms[exercise].displayName}</Heading>
          <Input
          type="numeric"
          onChangeText={(text) => this.setState({text})}
          value={this.state.oneRms[exercise].kg}
        />
        </Slide>

      })

    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Swiper
          dot={<View></View>}
          activeDot = {<View></View>}
          paginationStyle={styles.pagination}
          showsButtons={false}
          showsHorizontalScrollIndicator={false}>
            {exercises}
          </Swiper>
        </View>
      </View>
    )
  }
}
