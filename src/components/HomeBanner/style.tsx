import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 8,
  },
  bannerBg: {
    height: 300,
    padding: 15,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerTopText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  bannerTopTextLeft: {
    color: 'white',
    fontFamily: 'arial,sans-serif',
    // fontFamily: '"helvetica neue",helvetica,arial,sans-serif',
    fontSize: 32,
  },
  bannerTopTextRight: {
    color: 'white',
    fontSize: 20,
    // fontFamily: '"helvetica neue",helvetica,arial,sans-serif',
    fontFamily: 'arial,sans-serif',
  },
  bannerBottomTextWrap: {},
  bannerBottomText: {
    color: 'white',
    fontSize: 48,
    fontFamily: 'VT323',
    textAlign: 'center',
  },
  sunnyImage: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: '50%',
    left: '50%',
    transform: [{translateX: -30}, {translateY: -30}],
  },
});
