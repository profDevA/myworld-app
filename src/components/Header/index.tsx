import React from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Header = () => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo-x.png')}
          style={styles.logoImage}
        />
        <Image
          source={require('../../assets/images/logo-x.png')}
          style={styles.logoImage}
        />
        <Text>asdfasdfasd</Text>
      </View>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        colors={[
          'blue',
          '#FB47FF',
          '#F9007C',
          '#FF2828',
          'yellow',
          '#4AFF47',
          '#00F4F0',
        ]}
        style={styles.lineRainbow}
      />
    </React.Fragment>
  );
};

export default Header;
