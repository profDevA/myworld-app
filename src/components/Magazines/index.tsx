import React from 'react';
import {Image, View} from 'react-native';
import styles from './style';

const magazines = [
  {
    title: '',
    image: require('../../assets/images/magazine/Friends.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/News.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Recipes.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Sport.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Famous.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Info.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Music.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Science.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Tech.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Care.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Culture.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Fashion.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Politic.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/VideoGame.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Nature&Animals.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Fitness.png'),
  },
  {
    title: '',
    image: require('../../assets/images/magazine/Retweet&Share.png'),
  },
];
const Magazines = () => {
  return (
    <View style={styles.container}>
      {magazines.map((magazine, index) => (
        <View key={index} style={styles.gridItem}>
          <Image source={magazine.image} style={styles.itemImage} />
        </View>
      ))}
    </View>
  );
};

export default Magazines;
