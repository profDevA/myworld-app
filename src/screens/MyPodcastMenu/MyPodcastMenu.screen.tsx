import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import axios from 'axios';
import styles from './MyPodcastMenu.style';
import {ScrollView} from 'react-native-gesture-handler';
import {API_URL} from '../../constants';
import MyPodcastMenuHeader from '../../components/MyPodcastMenu/MyPodcastMenuHeader';
import PodcastMenuBanner from '../../components/MyPodcastMenu/Banner/PodcastMenuBanner';
import PodcastCarousel from '../../components/MyPodcastMenu/Carousel/Carousel';
import VideoGallery from '../../components/MyPodcastMenu/VideoGallery/VideoGallery';
import MyWoorldOriginals from '../../components/MyPodcastMenu/MyWoorldOriginals/MyWoorldOriginals';
import {IVideo} from '../../components/MyPodcastMenu/MyWoorldOriginals/MyWoorldOriginals';
import FullPodcasts from '../../components/MyPodcastMenu/FullPodcasts/FullPodcasts';

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

  useEffect(() => {
    const fetchOriginals = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_originals.php`,
      );
      setMyWoorldOriginals(data);
    };
    fetchOriginals();
  }, []);

  useEffect(() => {
    const fetchTopVideoClips = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_videoclips.php`,
      );
      setTopVideoClips(data);
    };
    fetchTopVideoClips();
  }, []);

  useEffect(() => {
    const fetchTrendingClips = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_trending_clips.php`,
      );
      if (!data.status) {
        setTrendingClips(data);
      }
    };
    fetchTrendingClips();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_top_incognitos.php`,
      );
      if (!data.status) {
        setTopIncognitos(data);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_most_listened_clips.php`,
      );
      setMostLstenedClips(data);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_reflexiones.php`,
      );
      setReflexiones(data);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_espirituals.php`,
      );
      setEspirituals(data);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_creepies.php`,
      );
      setCreepies(data);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_top_emotionals.php`,
      );
      setEmotionals(data);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_top_personals.php`,
      );
      setTopPersonals(data);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_top_chistes.php`,
      );
      setTopchistes(data);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const {data} = await axios.get(
        `${API_URL}API/MyPodcastMenu/get_full_podcasts.php`,
      );
      setFullPodcasts(data);
    };
    fetch();
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
    </SafeAreaView>
  );
};

export default MyPodcastMenuScreen;
