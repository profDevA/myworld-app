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
import axios from 'axios';
import styles from './Podcast.style';
import {API_URL} from '../../constants';
import MyPodcastMenuHeader from '../../components/MyPodcastMenu/MyPodcastMenuHeader';

const PodcastScreen = ({navigation, route}: any) => {
  // const {ID, TITLE, IMAGE, PODCAST, profileImage} = route.params;
  const ID = '70';
  const IMAGE = '/Assets/Podcasts/Image/lgbtqi.jpg';
  const TITLE = 'LGBTQ';
  const DESCRIPTION = 'Una Comunidad Estoica & Resiliente...';
  const profileImage = '/Assets/Images/Profile_Picture/61c7d1075e7933.jpg';

  console.log('routeparams', route.params);

  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <MyPodcastMenuHeader />
      <View style={styles.container}>
        <ImageBackground
          source={{uri: `${API_URL}${IMAGE}`}}
          style={styles.background}>
          <View style={styles.content}>
            <Text style={styles.title}>{TITLE}</Text>
            <Text style={styles.description}>{DESCRIPTION}</Text>
            <View style={styles.centerBlock}>
              <Image
                source={{uri: `${API_URL}${profileImage}`}}
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
        <TouchableOpacity style={styles.button}>
          <Icon name="add-circle-sharp" color="#FFF" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="play-skip-back-sharp" color="#FFF" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="play-back-sharp" color="#FFF" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name={'pause-sharp'} color="#FFF" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="play-forward-sharp" color="#FFF" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="play-skip-forward-sharp" color="#FFF" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="volume-high-sharp" color="#FFF" size={25} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PodcastScreen;
