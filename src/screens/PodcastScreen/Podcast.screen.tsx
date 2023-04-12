import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import styles from './Podcast.style';
import {API_URL} from '../../constants';
import MyPodcastMenuHeader from '../../components/MyPodcastMenu/MyPodcastMenuHeader';

const PodcastScreen = ({navigation, route}: any) => {
  const {ID, TITLE, IMAGE, PODCAST, profileImage} = route.params;

  console.log('routeparams', route.params);

  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      {' '}
      <MyPodcastMenuHeader />
      <View style={styles.container}>
        <ImageBackground
          source={{uri: `${API_URL}${IMAGE}`}}
          style={styles.background}>
          <View style={styles.content}>
            <Text style={styles.title}>asdfasdfsdf</Text>
            {/* <View style={{backgroundColor: 'yellow'}}> */}
            <Text>d</Text>
            <Text>asdfasdfasdfasdf</Text>
            <Text>asdfasdfasdfasdf</Text>
            <Text>asdfasdfasdfasdf</Text>
            <Text>asdfasdfasdfasdf</Text>
            <Text>asdfasdfasdfasdf</Text>
            {/* </View> */}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default PodcastScreen;
