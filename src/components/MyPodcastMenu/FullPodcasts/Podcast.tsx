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
          start={{x: 0.255, y: 0}}
          end={{x: 0.745, y: 1}}
          colors={gradColors}
          locations={locations}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>welcome to MyPodcast!!</Text>
            <Text style={styles.description}>
              create podcast to share with others...
            </Text>
          </View>
        </LinearGradient>
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
    </View>
  );
};

export default Podcast;
