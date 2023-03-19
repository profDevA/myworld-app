import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './MyPodcastMenu.style';
import {ScrollView} from 'react-native-gesture-handler';
import MyPodcastMenuHeader from '../../components/MyPodcastMenu/MyPodcastMenuHeader';
import PodcastMenuBanner from '../../components/MyPodcastMenu/Banner/PodcastMenuBanner';
import PodcastCarousel from '../../components/MyPodcastMenu/Carousel/Carousel';

const MyPodcastMenuScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <MyPodcastMenuHeader />
      <ScrollView>
        <PodcastMenuBanner />
        <PodcastCarousel />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPodcastMenuScreen;
