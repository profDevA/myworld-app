import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

interface IVideoGallery {
  title: string;
  videos: [];
}
const VideoGallery: React.FC<IVideoGallery> = ({title, videos}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default VideoGallery;
