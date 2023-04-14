import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer, {
  Event,
  State,
  Track,
  usePlaybackState,
} from 'react-native-track-player';
import styles from './Podcast.style';
import {API_URL} from '../../constants';
import MyPodcastMenuHeader from '../../components/MyPodcastMenu/MyPodcastMenuHeader';
import axios from 'axios';

const PodcastScreen = ({route}: any) => {
  const {trackId} = route.params;
  const playerState = usePlaybackState();
  const [volume, setVolume] = useState(1);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [profileImage, setProfileImage] = useState('');
  const [rate, setRate] = useState(1);
  const isPlaying = playerState === State.Playing;

  useEffect(() => {
    const getTrack = async () => {
      const tracks = await TrackPlayer.getQueue();
      const trackIndex = tracks.findIndex(track => track.id === trackId);
      setCurrentTrack(tracks[trackIndex]);
      await TrackPlayer.skip(trackIndex);
      TrackPlayer.play();
    };
    getTrack();

    const onPlaybackStateChanged = (state: any) => {
      if (state.track !== currentTrack) {
        TrackPlayer.getTrack(state.track)
          .then(track => {
            setCurrentTrack(track);
          })
          .catch(error => {
            console.error('Error getting current track:', error);
          });
      }
    };

    const listener = TrackPlayer.addEventListener(
      Event.PlaybackTrackChanged,
      onPlaybackStateChanged,
    );

    return () => {
      listener.remove();
    };
  }, [trackId]);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      if (currentTrack?.artist) {
        const {data} = await axios.get(
          `${API_URL}/API/MyPodcastMenu/get_profile_picture.php?USER_NAME=${currentTrack.artist}`,
        );
        if (data.status) {
          setProfileImage(data.url);
        }
      }
    };
    fetchProfilePicture();
  }, [currentTrack]);

  const onPlayPausePress = () => {
    if (!isPlaying) {
      TrackPlayer.play();
    } else {
      TrackPlayer.pause();
    }
  };

  const skipToNextTrack = () => TrackPlayer.skipToNext();
  const skipToPreviousTrack = () => TrackPlayer.skipToPrevious();

  const toggleVolume = () => {
    if (volume) {
      TrackPlayer.setVolume(0);
      setVolume(0);
    } else {
      TrackPlayer.setVolume(1);
      setVolume(1);
    }
  };

  const toggleForward = () => {
    if (rate === 1.2) {
      TrackPlayer.setRate(1);
      setRate(1);
    } else {
      TrackPlayer.setRate(1.2);
      setRate(1.2);
    }
  };

  const toggleBack = () => {
    if (rate === 0.8) {
      TrackPlayer.setRate(1);
      setRate(1);
    } else {
      TrackPlayer.setRate(0.8);
      setRate(0.8);
    }
  };

  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <MyPodcastMenuHeader />
      <View style={styles.container}>
        <ImageBackground
          source={{uri: `${currentTrack?.artwork}`}}
          style={styles.background}>
          <View style={styles.content}>
            <Text style={styles.title}>{currentTrack?.title}</Text>
            <Text style={styles.description}>{currentTrack?.description}</Text>
            <View style={styles.centerBlock}>
              <Image
                source={{uri: `${API_URL}/${profileImage}`}}
                style={styles.profileImage}
              />
              <Image
                source={require('../../assets/images/icons/hostTalking.gif')}
                style={styles.hostTalking}
              />
              <Image
                source={require('../../assets/images/icons/microphone.png')}
                style={styles.microphone}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.controls}>
        {/* <TouchableOpacity style={styles.button}>
          <Icon name="add-circle-sharp" color="#FFF" size={25} />
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button}>
          <Icon
            name="play-skip-back-sharp"
            color="#FFF"
            size={25}
            onPress={skipToPreviousTrack}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon
            name="play-back-sharp"
            color="#FFF"
            size={25}
            onPress={toggleBack}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPlayPausePress}>
          <Icon
            name={isPlaying ? 'play-sharp' : 'pause-sharp'}
            color="#FFF"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleForward}>
          <Icon name="play-forward-sharp" color="#FFF" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon
            name="play-skip-forward-sharp"
            color="#FFF"
            size={25}
            onPress={skipToNextTrack}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleVolume}>
          <Icon
            name={volume ? 'volume-high-sharp' : 'volume-mute-sharp'}
            color="#FFF"
            size={25}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PodcastScreen;
