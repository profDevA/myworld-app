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
  },
  scrollView: {
    overflow: 'visible',
    paddingBottom: 40,
  },
  galeryItem: {
    marginHorizontal: 5,
  },
  image: {
    height: width * 0.45,
    width: width * 0.6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  newBadge: {
    width: 60,
    height: 60,
  },
  itemTitle: {
    fontSize: 20,
    color: '#fff',
  },
  profileImage: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: -30,
    left: 30,
    zIndex: 9999,
    borderRadius: 30,
  },
});
