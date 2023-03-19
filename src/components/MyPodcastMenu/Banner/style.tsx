import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    flex: 1,
    height: 0.7 * width,
    marginBottom: 20,
  },
  wrapper: {
    padding: 10,
    paddingTop: 30,
    height: '100%',
  },
  title: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 15,
    fontFamily: 'Audiowide',
  },
  description: {
    fontSize: 15,
    color: '#fff',
    width: 200,
    fontFamily: 'Orbitron',
  },
});
