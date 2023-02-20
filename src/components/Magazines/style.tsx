import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 30,
    gap: 10,
    flexWrap: 'wrap',
  },
  gridItem: {
    width: (width - 50) / 2,
    height: width * 0.6,
    backgroundColor: 'white',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
});
