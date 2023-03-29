import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Video from 'react-native-video';
import {API_URL} from '../../../constants';
import styles from './style';

export interface IVideo {
  ID: number;
  USER_NAME: string;
  TITLE: string;
  DESCRIPTION: string;
  PODCAST: string;
  IMAGE: string;
}

export interface IMyWoorldOriginals {
  myWoorldOriginals: IVideo[];
  title: string;
}

const MyWoorldOriginals: React.FC<IMyWoorldOriginals> = ({
  myWoorldOriginals,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView style={styles.videoContainer} horizontal persistentScrollbar>
        {myWoorldOriginals.map(video => (
          <Video
            key={video.ID}
            source={{uri: API_URL + video.PODCAST}}
            resizeMode="cover"
            controls
            style={styles.video}
            paused
            poster={`${API_URL}${video.IMAGE}`}
            onLoadStart={() => {
              console.log('onLoadStart', video.TITLE, new Date());
            }}
            onLoad={() => {
              console.log('onLoad', video.TITLE, new Date());
            }}
            playInBackground={false}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MyWoorldOriginals;
