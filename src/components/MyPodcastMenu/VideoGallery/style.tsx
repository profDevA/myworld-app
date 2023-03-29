import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  title: {
    fontSize: 23,
    fontFamily: 'Audiowide',
    color: '#fff',
    textAlign: 'center',
    height: 50,
    padding: 8,
  },
  galeryItem: {
    height: width * 0.45,
    width: width * 0.6,
    marginHorizontal: 15,
    borderRadius: 30,
  },
  image: {
    height: '100%',
    flexDirection: 'row',
  },
  newBadge: {
    width: 50,
    height: 50,
  },
});
