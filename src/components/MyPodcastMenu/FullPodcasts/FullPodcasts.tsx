import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './style';
import {IVideo} from '../MyWoorldOriginals/MyWoorldOriginals';
import Podcast from './Podcast';

interface IFullPodcasts {
  title: string;
  videos: IVideo[];
}

const FullPodcasts: React.FC<IFullPodcasts> = ({title, videos}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView horizontal persistentScrollbar style={styles.scrollView}>
        {videos.map(video => (
          <Podcast key={video.ID} video={video} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FullPodcasts;
