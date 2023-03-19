import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './style';
import {TextInput} from 'react-native-gesture-handler';

const Header = () => {
  const naviation = useNavigation();

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.menuGroup}>
          <TouchableOpacity style={styles.menuButton}>
            <Image
              source={require('../../../assets/images/icons/burgermenu.png')}
              style={styles.hamburgerMenuImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.podcastMenuButton}>
            <Image
              source={require('../../../assets/images/receiver.png')}
              style={styles.receiverImage}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search:"
            inputMode="text"
            placeholderTextColor="#6B7076"
            style={styles.searchInput}
          />
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/icons/search.png')}
              style={styles.searchButtonImage}
            />
          </TouchableOpacity>
        </View>
        <View style={{...styles.menuGroup, gap: 12}}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/icons/upLoad.png')}
              style={styles.uploadImage}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/icons/live.png')}
              style={styles.uploadImage}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/icons/incognito.png')}
              style={styles.uploadImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Header;
