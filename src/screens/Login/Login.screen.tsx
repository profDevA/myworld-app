import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './Login.style';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        <Image
          source={require('../../assets/images/createAccount.png')}
          style={styles.createAccountImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.howToUseButton}>
        <Image
          source={require('../../assets/images/howUseMyWorld.png')}
          style={styles.createAccountImage}
        />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Image
          source={require('../../assets/images/hello.png')}
          style={styles.titleImage}
        />
      </View>
      <View>
        <TextInput
          placeholder="Email"
          inputMode="email"
          placeholderTextColor="#6B7076"
          style={styles.authInput}
        />

        <TextInput
          inputMode="text"
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#6B7076"
          style={styles.authInput}
        />

        <TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: -1}}
            colors={gradColors}
            style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPassword}>
          <Image
            source={require('../../assets/images/passWord.png')}
            style={styles.forgotPasswordImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dontHaveAccount}>
          <Image
            source={require('../../assets/images/noHaveAnAccount.png')}
            style={styles.dontHaveAccountImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backToHome}>
          <Image
            source={require('../../assets/images/backToHome.png')}
            style={styles.forgotPasswordImage}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
