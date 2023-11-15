import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {},
  title: {
    fontSize: 25,
    textTransform: 'uppercase',
    color: '#fff',
    textAlign: 'center',
    height: 50,
    padding: 8,
    marginBottom: 5,
  },
  scrollContainer: {
    flexDirection: 'row',
    width: width,
    gap: 6,
  },
  item: {
    width: width,
    // height: width * 0.6,
    backgroundColor: '#000',
  },
  newsImage: {
    borderRadius: 6,
    width: width,
    height: width * 0.6,
  },
  itemBox: {
    padding: 25,
    alignItems: 'center',
  },
  newsTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 12,
  },
  newsAuthor: {
    color: '#999',
    fontSize: 16,
    marginBottom: 20,
  },
  readMore: {
    width: 125,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffc107',
    padding: 9,
  },
  readMoreText: {
    color: '#ffc107',
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase'
  },
});
