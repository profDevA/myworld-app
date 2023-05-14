import React, {useEffect, useState} from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import styles from './style';
import {IVideo} from '../MyWoorldOriginals/MyWoorldOriginals';
import {API_URL} from '../../../constants';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';

interface IVideoItem {
  video: IVideo;
}

const VideoItem: React.FC<IVideoItem> = ({video}) => {
  const [profileImg, setProifleImg] = useState('');

  useEffect(() => {
    const fetchProfilePicture = async () => {
      if (video.USER_NAME) {
        const {data} = await axios.get(
          `${API_URL}/API/MyPodcastMenu/get_profile_picture.php?USER_NAME=${video.USER_NAME}`,
        );
        if (data.status) {
          setProifleImg(data.url);
        }
      }
    };
    fetchProfilePicture();
  }, [video.USER_NAME]);

  const playPodcast = async (trackId?: string) => {
    const tracks = await TrackPlayer.getQueue();
    const trackIndex = tracks.findIndex(track => track.id === trackId);
    await TrackPlayer.skip(trackIndex);
    await TrackPlayer.skip(trackIndex);
    TrackPlayer.play();
  };
  return (
    <TouchableOpacity
      style={styles.galeryItem}
      onPress={() => playPodcast(video?.trackId)}>
      <ImageBackground
        source={{uri: API_URL + video.IMAGE}}
        style={styles.image}
        resizeMode="cover">
        <Image
          source={require('../../../assets/images/mypodcastmenu/newPodcast.png')}
          style={styles.newBadge}
        />
        <Text style={styles.itemTitle}>{video.TITLE}</Text>
      </ImageBackground>
      <Image
        source={{uri: `${API_URL}/${profileImg}`}}
        style={styles.profileImage}
      />
    </TouchableOpacity>
  );
};

export default VideoItem;
