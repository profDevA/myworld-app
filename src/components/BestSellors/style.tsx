import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  itemImage: {
    width: width / 2 - 10,
    resizeMode: 'contain',
  },
});
