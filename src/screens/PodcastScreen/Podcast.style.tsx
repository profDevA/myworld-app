import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  SafeAreaView2: {flex: 1, backgroundColor: '#111', overflow: 'scroll'},
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    width: width,
  },
  title: {
    color: '#fff',
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Audiowide',
    marginTop: 100,
    marginBottom: 20,
  },
  description: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Orbitron',
  },
  centerBlock: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    width: 180,
    height: 180,
    transform: [{translateX: -90}],
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  hostTalking: {
    width: 65,
    height: 65,
    top: 0,
    left: '100%',
    position: 'absolute',
  },
  microphone: {
    position: 'absolute',
    width: 55,
    height: 55,
    bottom: -25,
    left: 67.5,
  },
  controls: {
    height: 70,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
  },
  button: {
    width: 40,
    height: 40,
    padding: 7,
    marginHorizontal: 4,
  },
});
