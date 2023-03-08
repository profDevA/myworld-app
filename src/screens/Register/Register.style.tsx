import {Dimensions, StyleSheet} from 'react-native';

const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll',
  },
  scrollview: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: HEIGHT,
  },
  content: {
    padding: 15,
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'black',
    marginBottom: 20,
  },
  textInput: {
    fontSize: 45,
    width: '80%',
    textAlign: 'center',
    marginBottom: 20,
  },
  signInTxt: {
    fontSize: 50,
    color: 'black',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  back: {
    flexDirection: 'row',
  },
  genderText: {
    fontSize: 45,
    textAlign: 'center'
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
