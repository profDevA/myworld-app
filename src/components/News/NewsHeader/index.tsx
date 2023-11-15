import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './style';
import {TextInput} from 'react-native-gesture-handler';

const Header = () => {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.myNewsText}>MyNews</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('HomeBase')}>
          <Image
            source={require('../../../assets/images/icons/burgermenu.png')}
            style={styles.hamburgerMenuImage}
          />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default Header;
