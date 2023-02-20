import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from './style';

const HomeBanner = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const now = new Date();

  const dateString = now.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  useEffect(() => {
    const id = tick();
    return () => clearTimeout(id);
  }, []);

  const tick = () => {
    return setInterval(() => {
      setTime(() => new Date().toLocaleTimeString());
    }, 1000);
  };

  // const local_date = moment.utc(utcTime).local().format('YYYY-MM-DD HH:mm:ss');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Palo_Alto.jpg')}
        style={styles.bannerBg}>
        <Image
          source={require('../../assets/images/sunny.png')}
          style={styles.sunnyImage}
        />
        <View style={styles.bannerTopText}>
          <Text style={styles.bannerTopTextLeft}>Palo Alto</Text>
          <Text style={styles.bannerTopTextRight}>{dateString}</Text>
        </View>
        <View style={styles.bannerBottomTextWrap}>
          <Text style={styles.bannerBottomText}>{time}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeBanner;
