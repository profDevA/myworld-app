import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
  },
  menuButton: {
    padding: 5,
  },
  hamburgerMenuImage: {
    width: 32,
    height: 32,
  },
  podcastMenuButton: {
    // marginLeft: 7,
  },
  receiverImage: {
    width: 20,
    height: 18,
  },
  menuGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  searchInput: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 25,
    backgroundColor: '#222',
    minWidth: 85,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 25,
    height: 25,
  },
  searchButtonImage: {
    width: 25,
    height: 25,
  },
  uploadImage: {
    width: 32,
    height: 32,
  },
});
