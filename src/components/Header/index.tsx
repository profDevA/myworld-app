import React from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Header = () => {
  const gradColors = [
    'blue',
    '#FB47FF',
    '#F9007C',
    '#FF2828',
    'yellow',
    '#4AFF47',
    '#00F4F0',
  ];

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/images/logo-x.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.rightIcons}>
          <Image
            source={require('../../assets/images/trending-topic.png')}
            style={styles.headerIcons}
          />
          <Image
            source={require('../../assets/images/newsIcon.png')}
            style={styles.headerIcons}
          />
          <Image
            source={require('../../assets/images/myTVicon.png')}
            style={styles.headerIcons}
          />
          <Image
            source={require('../../assets/images/receiver.png')}
            style={styles.headerIcons}
          />
          <Image
            source={require('../../assets/images/MyMusic.png')}
            style={styles.headerIcons}
          />
          <Image
            source={require('../../assets/images/Snap.png')}
            style={styles.headerIcons}
          />
        </View>
      </View>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        colors={gradColors}
        style={styles.lineRainbow}
      />
    </React.Fragment>
  );
};

export default Header;
