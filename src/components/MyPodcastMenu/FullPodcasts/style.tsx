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
  playButton: {
    width: 25,
    height: 25,
    marginTop: 10,
  },
  itemTitle: {
    fontSize: 12,
    lineHeight: 18,
    color: '#fff',
  },
  description: {
    color: '#fff',
    fontSize: 9,
    width: '40%',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  gradient: {
    height: '100%',
    width: '100%',
    padding: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  username: {
    color: '#fff',
    fontSize: 13,
  },
});
