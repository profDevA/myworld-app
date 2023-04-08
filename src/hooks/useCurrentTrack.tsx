import {useEffect, useState} from 'react';
import TrackPlayer, {
  Event,
  Track,
  State,
  PlaybackStateEvent,
} from 'react-native-track-player';

type CurrentTrack = Track | null;

const useCurrentTrack = (): CurrentTrack => {
  const [currentTrack, setCurrentTrack] = useState<CurrentTrack>(null);

  const onPlaybackStateChanged = (state: PlaybackStateEvent) => {
    if (state.track !== currentTrack?.id) {
      TrackPlayer.getTrack(state.track)
        .then(track => {
          setCurrentTrack(track);
        })
        .catch(error => {
          console.error('Error getting current track:', error);
        });
    }
  };

  useEffect(() => {
    const getAndSetCurrentTrack = async () => {
      const trackId = await TrackPlayer.getCurrentTrack();
      if (trackId) {
        const track = await TrackPlayer.getTrack(trackId);
        setCurrentTrack(track);
      }
    };

    getAndSetCurrentTrack();

    // Subscribe to the playback state event to update the current track
    TrackPlayer.addEventListener(Event.PlaybackState, onPlaybackStateChanged);

    // Clean up the event listener when the component unmounts
    return () => {
      TrackPlayer.removeEventListener(
        Event.PlaybackState,
        onPlaybackStateChanged,
      );
    };
  }, [currentTrack]);

  return currentTrack;
};

export default useCurrentTrack;
