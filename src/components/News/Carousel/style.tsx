import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: 'red',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 50,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  itemImage: {
    width: width,
    height: width * 0.7,
    resizeMode: 'contain',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 15,
  },
  itemSubTitle: {
    color: '#fff',
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
