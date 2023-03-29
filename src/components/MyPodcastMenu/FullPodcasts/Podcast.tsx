import React, {useEffect, useState} from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import styles from './style';
import {IVideo} from '../MyWoorldOriginals/MyWoorldOriginals';
import {API_URL} from '../../../constants';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

interface IPodcast {
  video: IVideo;
}

const gradColors = ['#05FFB9A0', 'transparent'];
const locations = [0.5, 0.5];

const Podcast: React.FC<IPodcast> = ({video}) => {
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
  return (
    <View style={styles.galeryItem}>
      <ImageBackground
        source={{uri: API_URL + video.IMAGE}}
        style={styles.image}
        resizeMode="cover">
        <LinearGradient
          start={{x: 0.225, y: 0}}
          end={{x: 0.775, y: 1}}
          colors={gradColors}
          locations={locations}
          style={styles.gradient}>
          <View>
            <View style={styles.userInfo}>
              <Image
                source={{uri: `${API_URL}/${profileImg}`}}
                style={styles.profileImage}
              />
              <Text style={styles.username}>{video.USER_NAME}</Text>
            </View>
            <Text style={styles.itemTitle}>{video.TITLE}</Text>
            <Text style={styles.description}>{video.DESCRIPTION}</Text>
            <Image
              source={require('../../../assets/images/mypodcastmenu/play-button.png')}
              style={styles.playButton}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Podcast;
