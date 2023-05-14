import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View, TouchableOpacity} from 'react-native';
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
  const naviation = useNavigation();

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => naviation.navigate('LoginScreen')}
            style={styles.logo}>
            <Image
              source={require('../../assets/images/logo-x.png')}
              style={styles.logoImage}
            />
            <Text style={styles.logoText}>MyWoorld</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightIcons}>
          {/* <Image
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
          /> */}
          <TouchableOpacity
            onPress={() => naviation.navigate('MyPodcastMenuScreen')}>
            <Image
              source={require('../../assets/images/receiver.png')}
              style={styles.headerIcons}
            />
          </TouchableOpacity>
          {/* <Image
            source={require('../../assets/images/MyMusic.png')}
            style={styles.headerIcons}
          />
          <Image
            source={require('../../assets/images/Snap.png')}
            style={styles.headerIcons}
          /> */}
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
