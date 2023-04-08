import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  playerContainer: {
    position: 'absolute',
    width: width,
    padding: 10,
    bottom: 0,
    backgroundColor: '#000',
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  info: {
    flex: 2,
  },
  podcastImage: {
    width: 80,
    height: 45,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    color: 'lightseagreen',
  },
  controls: {
    flex: 4,
  },
  buttons: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  volume: {
    flex: 1,
    alignItems: 'center',
  },
});
