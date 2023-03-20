import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import styles from './style';

const videos = [
  {
    title: 'video 1',
    url: 'https://mywoorld.com/Assets/Podcasts/Podcast/63830efe9108capego_evitativo.MP4',
    poster:
      'https://mywoorld.com/Assets/Podcasts/Image/63830efe93e7cevitativo.jpeg',
  },
  {
    title: 'video 2',
    url: 'https://mywoorld.com/Assets/Podcasts/Podcast/63830efe9108capego_evitativo.MP4',
    poster:
      'https://mywoorld.com/Assets/Podcasts/Image/63830efe93e7cevitativo.jpeg',
  },
  {
    title: 'video 3',
    url: 'https://mywoorld.com/Assets/Podcasts/Podcast/63830efe9108capego_evitativo.MP4',
    poster:
      'https://mywoorld.com/Assets/Podcasts/Image/63830efe93e7cevitativo.jpeg',
  },
];

const MyWoorldOriginals = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Top Ten Video Clips</Text>
      </View>
      <ScrollView style={styles.videoContainer} horizontal persistentScrollbar>
        {videos.map(video => (
          <Video
            key={video.title}
            source={{uri: video.url}}
            resizeMode="cover"
            controls
            style={styles.video}
            paused
            poster={
              '../../../assets/Podcasts/Image/63ecddc2e6c23Jaques_Derrida.jpeg'
            }
            onLoadStart={() => {
              console.log('onLoadStart', video.title, new Date());
            }}
            onLoad={() => {
              console.log('onLoad', video.title, new Date());
            }}
            playInBackground={false}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MyWoorldOriginals;
