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
    padding: 8,
    marginBottom: 5,
  },
  videoContainer: {
    flexDirection: 'row',
  },
  video: {
    width: width / 2,
    height: width * 0.6,
  },
});
