import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './MyPodcastMenu.style';
import {ScrollView} from 'react-native-gesture-handler';
import MyPodcastMenuHeader from '../../components/MyPodcastMenu/MyPodcastMenuHeader';
import PodcastMenuBanner from '../../components/MyPodcastMenu/Banner/PodcastMenuBanner';
import PodcastCarousel from '../../components/MyPodcastMenu/Carousel/Carousel';
import VideoGallery from '../../components/MyPodcastMenu/VideoGallery/VideoGallery';
import MyWoorldOriginals from '../../components/MyPodcastMenu/MyWoorldOriginals/MyWoorldOriginals';
import MyWoorldOriginals1 from '../../components/MyPodcastMenu/MyWoorldOriginals1/MyWoorldOriginals';

export interface IVideo {
  title: string;
}

const MyPodcastMenuScreen = ({navigation}: any) => {
  const originalVideos = [{title: 'adsf'}];
  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <MyPodcastMenuHeader />
      <ScrollView>
        <PodcastMenuBanner />
        <PodcastCarousel />
        <MyWoorldOriginals />
        <MyWoorldOriginals1 />
        {/* <VideoGallery title="MyWoorld Originals" videos={originalVideos} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPodcastMenuScreen;
