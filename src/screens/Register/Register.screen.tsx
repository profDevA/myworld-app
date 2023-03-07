import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './Register.style';
import LinearGradient from 'react-native-linear-gradient';

const gradColors = [
  'blue',
  '#FB47FF',
  '#F9007C',
  '#FF2828',
  'yellow',
  '#4AFF47',
  '#00F4F0',
];

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.createAccountButton}>
        <Image
          source={require('../../assets/images/createAccount.png')}
          style={styles.createAccountImage}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
