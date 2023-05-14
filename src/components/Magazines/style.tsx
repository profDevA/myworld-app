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
  title: {
    color: 'crimson',
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  gridItem: {
    width: (width - 70) / 3,
    height: width * 0.36,
    backgroundColor: 'white',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
});
