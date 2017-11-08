import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Swiper from 'react-native-swiper';


const styles = {
  view: {
    height: 100,
    flex: 1
  },
  pagination: {
    bottom: 15
  }
}

const SwipeBanner = ({children}) => {
  return (
    <View style={styles.view} >
      <Swiper
      dot={<View></View>}
      activeDot = {<View></View>}
      paginationStyle={styles.pagination}
      showsButtons={false}
      showsHorizontalScrollIndicator={false}>
        {children}
      </Swiper>
    </View>
  )

}

export default SwipeBanner;
