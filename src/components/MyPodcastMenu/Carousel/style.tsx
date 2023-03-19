import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: 'red',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  itemImage: {
    width: width - 10,
    resizeMode: 'contain',
    position: 'relative',
  },
  arrowIcon: {
    position: 'absolute',
    height: '100%',
    text: {
      color: 'white',
    },
  },
  arrowLeft: {
    left: 10,
  },
  arrowRight: {
    right: 10,
  },
  iconBtn: {
    height: '100%',
    justifyContent: 'center',
  },
});
