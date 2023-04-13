import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import axios from 'axios';
import styles from './MyPodcastMenu.style';
import {API_URL} from '../../constants';
import MyPodcastMenuHeader from '../../components/MyPodcastMenu/MyPodcastMenuHeader';
import PodcastMenuBanner from '../../components/MyPodcastMenu/Banner/PodcastMenuBanner';
import PodcastCarousel from '../../components/MyPodcastMenu/Carousel/Carousel';
import VideoGallery from '../../components/MyPodcastMenu/VideoGallery/VideoGallery';
import MyWoorldOriginals from '../../components/MyPodcastMenu/MyWoorldOriginals/MyWoorldOriginals';
import {IVideo} from '../../components/MyPodcastMenu/MyWoorldOriginals/MyWoorldOriginals';
import FullPodcasts from '../../components/MyPodcastMenu/FullPodcasts/FullPodcasts';
import TrackPlayer, {State} from 'react-native-track-player';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';

const MyPodcastMenuScreen = ({navigation}: any) => {
  const [myWoorldOriginals, setMyWoorldOriginals] = useState<IVideo[]>([]);
  const [topVideoClips, setTopVideoClips] = useState<IVideo[]>([]);
  const [trendingClips, setTrendingClips] = useState<IVideo[]>([]);
  const [topIncognitos, setTopIncognitos] = useState<IVideo[]>([]);
  const [mostListenedClips, setMostLstenedClips] = useState<IVideo[]>([]);
  const [reflexiones, setReflexiones] = useState<IVideo[]>([]);
  const [espirituals, setEspirituals] = useState<IVideo[]>([]);
  const [creepies, setCreepies] = useState<IVideo[]>([]);
  const [emotionals, setEmotionals] = useState<IVideo[]>([]);
  const [topPersonals, setTopPersonals] = useState<IVideo[]>([]);
  const [topChistes, setTopchistes] = useState<IVideo[]>([]);
  const [fullPodcasts, setFullPodcasts] = useState<IVideo[]>([]);
  const [initialized, setInitialized] = useState(false);

  const convertToTrack = (videos: IVideo[], idKey: string) => {
    return videos.map(video => ({
      id: `${idKey}-${video.ID}`,
      url: `${API_URL}/${video.PODCAST}`,
      title: video.TITLE,
      artist: video.USER_NAME,
      artwork: `${API_URL}${video.IMAGE}`,
      description: video.DESCRIPTION,
    }));
  };

  const convertToVideo = (videos: IVideo[], idKey: string) => {
    return videos.map(video => ({
      ...video,
      trackId: `${idKey}-${video.ID}`,
    }));
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        await TrackPlayer.setupPlayer();

        const [
          myWoorldOriginalsResponse,
          topVideoClipsResponse,
          trendingClipsResponse,
          topIncognitosResponse,
          mostListenedClipsResponse,
          reflexionesResponse,
          espiritualsResponse,
          creepiesResponse,
          emotionalsResponse,
          topPersonalsResponse,
          topChistesResponse,
          fullPodcastsResponse,
        ] = await Promise.all([
          axios.get(`${API_URL}API/MyPodcastMenu/get_originals.php`),
          axios.get(`${API_URL}API/MyPodcastMenu/get_videoclips.php`),
          axios.get(`${API_URL}API/MyPodcastMenu/get_trending_clips.php`),
          axios.get(`${API_URL}API/MyPodcastMenu/get_top_incognitos.php`),
          axios.get(`${API_URL}API/MyPodcastMenu/get_most_listened_clips.php`),
          axios.get(`${API_URL}API/MyPodcastMenu/get_reflexiones.php`),
          axios.get(`${API_URL}API/MyPodcastMenu/get_espirituals.php`),
          axios.get(`${API_URL}API/MyPodcastMenu/get_creepies.php`),
          axios.get(`${API_URL}API/MyPodcastMenu/get_top_emotionals.php`),
          axios.get(`${API_URL}API/MyPodcastMenu/get_top_personals.php`),
          axios.get(`${API_URL}API/MyPodcastMenu/get_top_chistes.php`),
          axios.get(`${API_URL}API/MyPodcastMenu/get_full_podcasts.php`),
        ]);

        const trendingClipsTracks = convertToTrack(
          trendingClipsResponse.data,
          'track-trendingclips',
        );
        const trendingClipsVideos = convertToVideo(
          trendingClipsResponse.data,
          'track-trendingclips',
        );
        const topIncognitosTracks = convertToTrack(
          topIncognitosResponse.data,
          'track-incognitos',
        );
        const topIncognitosVideos = convertToVideo(
          topIncognitosResponse.data,
          'track-incognitos',
        );
        const mostListenedClipsTracks = convertToTrack(
          mostListenedClipsResponse.data,
          'track-mostlistenedclips',
        );
        const mostListenedClipsVideos = convertToVideo(
          mostListenedClipsResponse.data,
          'track-mostlistenedclips',
        );
        const reflexionesTracks = convertToTrack(
          reflexionesResponse.data,
          'track-reflexiones',
        );
        const reflexionesVideos = convertToVideo(
          reflexionesResponse.data,
          'track-reflexiones',
        );
        const espiritualsTracks = convertToTrack(
          espiritualsResponse.data,
          'track-espirituals',
        );
        const espiritualsVideos = convertToVideo(
          espiritualsResponse.data,
          'track-espirituals',
        );
        const creepiesTracks = convertToTrack(
          creepiesResponse.data,
          'track-creepies',
        );
        const creepiesVideos = convertToVideo(
          creepiesResponse.data,
          'track-creepies',
        );
        const topPersonalsTracks = convertToTrack(
          topPersonalsResponse.data,
          'track-topPersonals',
        );
        const topPersonalsVideos = convertToVideo(
          topPersonalsResponse.data,
          'track-topPersonals',
        );
        const emotionalsTracks = convertToTrack(
          emotionalsResponse.data,
          'track-emotionals',
        );
        const emotionalsVideos = convertToVideo(
          emotionalsResponse.data,
          'track-emotionals',
        );
        const topChistesTracks = convertToTrack(
          topChistesResponse.data,
          'track-chistes',
        );
        const topChistesVideos = convertToVideo(
          topChistesResponse.data,
          'track-chistes',
        );
        const fullPodcastsTracks = convertToTrack(
          fullPodcastsResponse.data,
          'track-fullpodcasts',
        );
        const fullPodcastsVideos = convertToVideo(
          fullPodcastsResponse.data,
          'track-fullpodcasts',
        );

        await TrackPlayer.add(trendingClipsTracks);
        await TrackPlayer.add(topIncognitosTracks);
        await TrackPlayer.add(mostListenedClipsTracks);
        await TrackPlayer.add(reflexionesTracks);
        await TrackPlayer.add(espiritualsTracks);
        await TrackPlayer.add(creepiesTracks);
        await TrackPlayer.add(emotionalsTracks);
        await TrackPlayer.add(topPersonalsTracks);
        await TrackPlayer.add(topChistesTracks);
        await TrackPlayer.add(fullPodcastsTracks);
        await TrackPlayer.play();

        setMyWoorldOriginals(myWoorldOriginalsResponse.data);
        setTopVideoClips(topVideoClipsResponse.data);
        setTrendingClips(trendingClipsVideos);
        setTopIncognitos(topIncognitosVideos);
        setMostLstenedClips(mostListenedClipsVideos);
        setReflexiones(reflexionesVideos);
        setEspirituals(espiritualsVideos);
        setCreepies(creepiesVideos);
        setEmotionals(emotionalsVideos);
        setTopPersonals(topPersonalsVideos);
        setTopchistes(topChistesVideos);
        setFullPodcasts(fullPodcastsVideos);
        setInitialized(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
    return () => {
      TrackPlayer.reset();
    };
  }, []);

  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <MyPodcastMenuHeader />
      <ScrollView>
        <PodcastMenuBanner />
        <PodcastCarousel />
        {myWoorldOriginals.length > 0 && (
          <MyWoorldOriginals
            myWoorldOriginals={myWoorldOriginals}
            title="MyWoorld Originals"
          />
        )}
        {topVideoClips.length > 0 && (
          <MyWoorldOriginals
            myWoorldOriginals={topVideoClips}
            title="Top Ten Video Clips"
          />
        )}
        {topIncognitos.length > 0 && (
          <VideoGallery title="Top Ten Incognitos" videos={topIncognitos} />
        )}
        {trendingClips.length > 0 && (
          <VideoGallery title="New Trending Clips" videos={trendingClips} />
        )}
        {mostListenedClips.length > 0 && (
          <VideoGallery
            title="Most Listened Clips"
            videos={mostListenedClips}
          />
        )}
        {reflexiones.length > 0 && (
          <VideoGallery title="Reflexiones" videos={reflexiones} />
        )}
        {espirituals.length > 0 && (
          <VideoGallery title="Fe & Espiritualidad" videos={espirituals} />
        )}
        {creepies.length > 0 && (
          <VideoGallery title="TERROR | CREEPY" videos={creepies} />
        )}
        {emotionals.length > 0 && (
          <VideoGallery title="Tips Emocionales" videos={emotionals} />
        )}
        {topPersonals.length > 0 && (
          <VideoGallery title="Tips Personales" videos={topPersonals} />
        )}
        {topChistes.length > 0 && (
          <VideoGallery title="Tp Ten Chistes" videos={topChistes} />
        )}
        {fullPodcasts.length > 0 && (
          <FullPodcasts title="Full Podcasts" videos={fullPodcasts} />
        )}
      </ScrollView>
      {initialized && <MusicPlayer />}
    </SafeAreaView>
  );
};

export default MyPodcastMenuScreen;
