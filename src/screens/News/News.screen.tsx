import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import styles from './News.style';
import NewsHeader from '../../components/News/NewsHeader';
import NewsCarousel from '../../components/News/Carousel/Carousel';
import NewsList, {INews} from '../../components/News/NewsList/NewsList';

const politicalNewsList: INews[] = [
  {
    ID: 1,
    TITLE: 'JenniferLópezcomparteimágenesinéditasdesubodaconBenAffleck',
    AUTHOR: 'Miralo',
    IMAGE: require('../../assets/images/mynews/news-political-1.png'),
    LINK: 'https://google.com',
  },
  {
    ID: 2,
    TITLE: 'AsífueelencuentrodeJBalvinconelpapaFrancisco,enelVaticano',
    AUTHOR: 'Miralo',
    IMAGE: require('../../assets/images/mynews/news-political-2.png'),
    LINK: 'https://google.com',
  },
];
const showNewsList: INews[] = [
  {
    ID: 1,
    TITLE: 'Piquéamenazacondemandarapaparazzis',
    AUTHOR: 'Entérate..!!',
    IMAGE: require('../../assets/images/mynews/news-economy-1.png'),
    LINK: 'https://google.com',
  },
];

const movieAndSeriesNewsList: INews[] = [
  {
    ID: 1,
    TITLE: 'Space Jam: A New Legacy SoundTrack',
    AUTHOR: 'soundtrack announced featuring Lil Wayne, Chance The Rapper',
    IMAGE: require('../../assets/images/mynews/news-movie-1.jpeg'),
    LINK: 'https://google.com',
  },
  {
    ID: 2,
    TITLE: "NETFLIX'S MOST AFFECTIM FILM",
    AUTHOR: 'MIRACLE IN CELL #7',
    IMAGE: require('../../assets/images/mynews/news-movie-2.jpg'),
    LINK: 'https://google.com',
  },
];

const sportNewsList: INews[] = [
  {
    ID: 1,
    TITLE: 'THE FAMOUS OREJONA AND OTHER LEAGUES IN THE WORLD',
    AUTHOR: 'WILL WAIT UNTIL NEW NOTICE',
    IMAGE: require('../../assets/images/mynews/news-sport-1.jpeg'),
    LINK: 'https://google.com',
  },
];

const cultureNewsList: INews[] = [
  {
    ID: 1,
    TITLE: 'Free Britney',
    AUTHOR:
      'Spears Hits Back at Conservatorship in Impassioned Testimony: ‘I Just Want My Life Back’',
    IMAGE: require('../../assets/images/mynews/news-britney-1.jpeg'),
    LINK: 'https://google.com',
  },
];

const MyPodcastMenuScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <NewsHeader />
      <ScrollView>
        <NewsCarousel />
        <NewsList newsList={politicalNewsList} title="Political News" />
        <NewsList newsList={showNewsList} title="Show News" />
        <NewsList
          newsList={movieAndSeriesNewsList}
          title="Movie & Series News"
        />
        <NewsList newsList={sportNewsList} title="Sport News" />
        <NewsList newsList={cultureNewsList} title="Culture News" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPodcastMenuScreen;
