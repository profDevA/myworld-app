import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import styles from './style';

const data = [
  {
    img: require('../../assets/images/bestsellors.jpg'),
  },
  {
    img: require('../../assets/images/bestseller1.jpg'),
  },
  {
    img: require('../../assets/images/bestseller2.jpg'),
  },
  {
    img: require('../../assets/images/bestseller3.jpg'),
  },
  {
    img: require('../../assets/images/bestseller4.jpg'),
  },
  {
    img: require('../../assets/images/bestseller6.jpg'),
  },
  {
    img: require('../../assets/images/bestseller7.jpg'),
  },
  {
    img: require('../../assets/images/bestseller8.jpg'),
  },
  {
    img: require('../../assets/images/bestseller9.jpg'),
  },
  {
    img: require('../../assets/images/bestseller10.jpg'),
  },
];

const BestSellors = () => {
  const width = Dimensions.get('window').width;

  return (
    <GestureHandlerRootView style={styles.root}>
      <Carousel
        loop
        vertical={false}
        width={width / 2}
        height={width * 0.6}
        style={{width: width}}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item, index}) => (
          <View style={styles.item}>
            <Image
              source={item.img}
              style={styles.itemImage}
              alt="Best seller image"
            />
          </View>
        )}
      />
    </GestureHandlerRootView>
  );
};

export default BestSellors;
