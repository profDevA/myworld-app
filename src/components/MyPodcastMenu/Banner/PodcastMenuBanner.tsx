import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const gradColors = ['#05FFB9A0', 'transparent'];
const locations = [0.5, 0.5];

const Banner = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/mypodcastmenu/mainPodcast.jpg')}
        style={styles.background}>
        <LinearGradient
          start={{x: 0.255, y: 0}}
          end={{x: 0.745, y: 1}}
          colors={gradColors}
          locations={locations}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>welcome to MyPodcast!!</Text>
            <Text style={styles.description}>
              create podcast to share with others...
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Banner;
