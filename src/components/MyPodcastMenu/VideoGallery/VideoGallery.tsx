import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import {IVideo} from '../MyWoorldOriginals/MyWoorldOriginals';
import VideoItem from './VideoItem';

interface IVideoGallery {
  title: string;
  videos: IVideo[];
}

const VideoGallery: React.FC<IVideoGallery> = ({title, videos}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView horizontal persistentScrollbar style={styles.scrollView}>
        {videos.map(video => (
          <VideoItem key={video.ID} video={video} />
        ))}
      </ScrollView>
    </View>
  );
};

export default VideoGallery;
