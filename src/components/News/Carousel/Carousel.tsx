import React, {useRef} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const data = [
  {
    img: require('../../../assets/images/mynews/news-1.jpg'),
    title: 'JUDGE AUTHORIZES THE INCOME OF PHYSICIANS IN...',
    description: 'THEY WILL OFFER A FREE DEGREE',
  },
  {
    img: require('../../../assets/images/mynews/news-2.jpg'),
    title: 'UNIVERSITY OF TEXAS IN EL PASO',
    description: 'THEY WILL OFFER A FREE DEGREE',
  },
  {
    img: require('../../../assets/images/mynews/news-3.jpg'),
    title: 'DUAL LANGUAGE AT...',
    description: 'THEY WILL OFFER A FREE DEGREE',
  },
];

const NewsCarousel = () => {
  const carouselRef = useRef<ICarouselInstance>(null);
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
      <View>
        <Text style={styles.title}>Local News</Text>
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
          renderItem={({item}) => (
            <View style={styles.item}>
              <ImageBackground
                source={item.img}
                style={styles.itemImage}
                resizeMode="cover"
                alt="Best seller image">
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemSubTitle}>{item.description}</Text>
              </ImageBackground>
            </View>
          )}
        />
      </View>
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

export default NewsCarousel;
