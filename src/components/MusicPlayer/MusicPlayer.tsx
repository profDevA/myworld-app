import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import TrackPlayer, {
  Event,
  RepeatMode,
  State,
  Track,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import styles from './style';
import {current} from '@reduxjs/toolkit';

export interface IMusicPlayer {}

const MusicPlayer: React.FC<IMusicPlayer> = () => {
  const {position, duration} = useProgress();
  const playerState = usePlaybackState();
  const isPlaying = playerState === State.Playing;
  const [isSeeking, setIsSeeking] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [repeatMode, setRepeatMode] = useState('off');
  const [originalTracks, setOriginalTracks] = useState<Track[]>([]);
  const [shuffled, setShuffled] = useState(false);
  //the value of the slider should be between 0 and 1
  const [sliderValue, setSliderValue] = useState(0);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    // get all tracks
    // TrackPlayer.getQueue().then(tracks => setOriginalTracks(tracks));
    TrackPlayer.getCurrentTrack()
      .then(trackId => {
        if (trackId !== null) {
          return TrackPlayer.getTrack(trackId);
        }
      })
      .then(track => {
        if (track) {
          setCurrentTrack(track);
        }
      })
      .catch(error => {
        console.error('Error getting current track:', error);
      });

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
  }, []);

  //this hook updates the value of the slider whenever the current position of the song changes
  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  const onPlayPausePress = () => {
    console.log('----');
    if (!isPlaying) {
      TrackPlayer.play();
    } else {
      TrackPlayer.pause();
    }
  };

  const skipToNextTrack = () => TrackPlayer.skipToNext();
  const skipToPreviousTrack = () => TrackPlayer.skipToPrevious();

  //this function is called when the user starts to slide the seekbar
  const slidingStarted = () => {
    setIsSeeking(true);
  };
  //this function is called when the user stops sliding the seekbar
  const slidingCompleted = async (value: number) => {
    setSliderValue(value);
    await TrackPlayer.seekTo(value * duration);
    setIsSeeking(false);
  };

  const volumeSlideFinished = async (value: number) => {
    setVolume(value);
    TrackPlayer.setVolume(value);
  };

  const onRepeatMode = () => {
    if (repeatMode === 'off') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('on');
    } else {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  };

  const onShuffle = async () => {
    // if (!shuffled) {
    //   const shuffledTracks = _.shuffle(originalTracks);
    //   await TrackPlayer.reset();
    //   await TrackPlayer.add(shuffledTracks);
    //   await TrackPlayer.play();
    //   setShuffled(true);
    // } else {
    //   await TrackPlayer.reset();
    //   await TrackPlayer.add(originalTracks);
    //   await TrackPlayer.play();
    //   setShuffled(false);
    // }
  };

  // console.log(
  //   JSON.stringify(
  //     {isPlaying, position, isSeeking, duration, currentTrack},
  //     null,
  //     2,
  //   ),
  // );

  console.log('==', isPlaying, currentTrack);

  const artImg =
    (currentTrack?.artwork as string) ||
    `https://picsum.photos/45/80/?random=${Math.random()}`;

  return (
    <View style={styles.playerContainer}>
      <View style={styles.info}>
        <Image source={{uri: artImg}} style={styles.podcastImage} />
        <Text style={styles.title}>
          {currentTrack?.title ? currentTrack.title : 'unknown'}
        </Text>
        <Text style={styles.username}>
          {currentTrack?.artist ? currentTrack.artist : 'unknown'}
        </Text>
      </View>
      <View style={styles.controls}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={onShuffle}>
            <Icon
              name="shuffle"
              color={!shuffled ? 'lightseagreen' : '#0b5e5a'}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={skipToPreviousTrack}>
            <Icon name="play-skip-back" color="lightseagreen" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onPlayPausePress}>
            <Icon
              name={isPlaying ? 'pause' : 'play'}
              color="lightseagreen"
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={skipToNextTrack}>
            <Icon name="play-skip-forward" color="lightseagreen" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onRepeatMode}>
            <Icon
              name="repeat"
              color={repeatMode === 'off' ? 'lightseagreen' : '#0b5e5a'}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <Slider
          style={{width: 200, height: 30}}
          minimumValue={0}
          maximumValue={1}
          value={sliderValue}
          minimumTrackTintColor="lightseagreen"
          maximumTrackTintColor="#404040"
          onSlidingStart={slidingStarted}
          onSlidingComplete={slidingCompleted}
        />
      </View>
      <View style={styles.volume}>
        <Icon name="volume-medium" color="lightseagreen" size={20} />
        <Slider
          style={{width: 50, height: 30}}
          minimumValue={0}
          maximumValue={1}
          value={volume}
          minimumTrackTintColor="lightseagreen"
          maximumTrackTintColor="#404040"
          onSlidingComplete={volumeSlideFinished}
        />
      </View>
    </View>
  );
};

export default MusicPlayer;
