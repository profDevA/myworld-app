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

const MyPodcastMenuScreen = ({navigation}: any) => {
  const [myWoorldOriginals, setMyWoorldOriginals] = useState<IVideo[]>([]);
  const [topVideoClips, setTopVideoClips] = useState<IVideo[]>([]);
  const [trendingClips, setTrendingClips] = useState<IVideo[]>([]);

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

  console.log('trendingclips', JSON.stringify(trendingClips, null, 2));

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
        {trendingClips.length > 0 && (
          <VideoGallery title="New Trending Clips" videos={trendingClips} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPodcastMenuScreen;
