import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {},
  title: {
    fontSize: 23,
    fontFamily: 'Audiowide',
    color: '#fff',
    textAlign: 'center',
    height: 50,
    backgroundColor: 'green',
    padding: 8,
  },
});
