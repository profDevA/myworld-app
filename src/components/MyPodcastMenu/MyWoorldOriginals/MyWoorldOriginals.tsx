import React from 'react';
import {Text, View} from 'react-native';
import Video from 'react-native-video';
import styles from './style';

const videos = [
  {
    title: 'video 1',
    url: require('../../../assets/Podcasts/Podcast/63ecddc2d91ffA.mp4'),
    poster: '../../../assets/Podcasts/Image/63ecddc2e6c23Jaques_Derrida.jpeg',
  },
  {
    title: 'video 2',
    url: require('../../../assets/Podcasts/Podcast/63eee2e366b36X.mp4'),
    poster: '../../../assets/Podcasts/Image/63eee2e375549Ghosting.jpeg',
  },
];

const MyWoorldOriginals = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>MyWoorld Originals</Text>
      </View>
      <View style={styles.videoContainer}>
        {videos.map(video => (
          <Video
            key={video.title}
            source={video.url}
            resizeMode="cover"
            controls
            style={styles.video}
            paused
            // poster={
            //   '../../../assets/Podcasts/Image/63ecddc2e6c23Jaques_Derrida.jpeg'
            // }
            onLoadStart={() => {
              console.log('onLoadStart', video.title, new Date());
            }}
            onLoad={() => {
              console.log('onLoad', video.title, new Date());
            }}
            playInBackground={false}
          />
        ))}
      </View>
      <Text>asdf</Text>
    </View>
  );
};

export default MyWoorldOriginals;
