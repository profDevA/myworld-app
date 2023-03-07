import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    overflow: 'scroll',
    alignItems: 'center',
    position: 'relative',
  },
  titleWrapper: {
    paddingTop: 100,
    paddingBottom: 30,
  },
  titleImage: {
    width: 250,
    height: 120,
    resizeMode: 'contain',
    borderColor: 'red',
  },
  authInput: {
    width: 320,
    height: 50,
    fontSize: 30,
    // fontFamily: 'Chewy',
    color: '#FFF',
    textAlign: 'center',
    padding: 0,
    borderRadius: 30,
    borderColor: '#FFF',
    borderWidth: 3,
    marginBottom: 25,
  },
  loginButton: {
    height: 50,
    borderRadius: 50,
    marginBottom: 30,
  },
  loginText: {
    color: '#FFF',
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 3,
  },
  createAccountImage: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
    padding: 0,
  },
  createAccountButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    width: 200,
    height: 60,
    transform: [
      {
        rotate: '-10deg',
      },
    ],
  },
  howToUseButton: {
    position: 'absolute',
    top: 70,
    right: 20,
    width: 200,
    height: 60,
    transform: [
      {
        rotate: '10deg',
      },
    ],
  },
  forgotPassword: {
    position: 'relative',
    marginBottom: 20,
    left: -30,
    transform: [
      {
        rotate: '-10deg',
      },
    ],
  },
  forgotPasswordImage: {
    width: 280,
    height: 80,
  },
  dontHaveAccount: {
    right: -50,
    transform: [
      {
        rotate: '10deg',
      },
    ],
  },
  dontHaveAccountImage: {
    width: 300,
    height: 80,
  },
  backToHome: {
    position: 'relative',
    marginBottom: 30,
    left: -10,
    transform: [
      {
        rotate: '-10deg',
      },
    ],
  },
});
