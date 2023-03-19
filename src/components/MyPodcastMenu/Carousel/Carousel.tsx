import React, {useRef} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const data = [
  {
    img: require('../../../assets/images/mypodcastmenu/daddy-issues.jpg'),
  },
  {
    img: require('../../../assets/images/mypodcastmenu/God.jpg'),
  },
  {
    img: require('../../../assets/images/mypodcastmenu/lgbtq.jpg'),
  },
];

const PodcastCarousel = () => {
  const carouselRef = useRef<ICarouselInstance>(null);
  const right = useRef(null);
  const width = Dimensions.get('window').width;

  const handleLeft = () => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.prev();
    }
  };
  const handleRight = () => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <Carousel
        loop
        vertical={false}
        width={width}
        height={width * 0.7}
        style={{width: width}}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        ref={carouselRef}
        renderItem={({item, index}) => (
          <View style={styles.item}>
            <Image
              source={item.img}
              style={styles.itemImage}
              alt="Best seller image"
            />
          </View>
        )}
      />
      <View style={{...styles.arrowIcon, ...styles.arrowLeft}}>
        <TouchableOpacity onPress={handleLeft} style={styles.iconBtn}>
          <Icon name="chevron-back-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{...styles.arrowIcon, ...styles.arrowRight}}>
        <TouchableOpacity onPress={handleRight} style={styles.iconBtn}>
          <Icon name="chevron-forward-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default PodcastCarousel;
