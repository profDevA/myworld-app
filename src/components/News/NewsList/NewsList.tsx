import React from 'react';
import {Image, ScrollView, TouchableOpacity, Text, View} from 'react-native';
import {API_URL} from '../../../constants';
import styles from './style';

export interface INews {
  ID: number;
  TITLE: string;
  AUTHOR: string;
  IMAGE: any;
  LINK: string;
}

export interface INewsList {
  newsList: INews[];
  title: string;
}

const NewsList: React.FC<INewsList> = ({newsList, title}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView style={styles.scrollContainer} horizontal persistentScrollbar>
        {newsList.map(news => (
          <View style={styles.item} key={news.ID}>
            <Image
              style={styles.newsImage}
              source={require('../../../assets/images/mynews/news-political-1.png')}
            />
            <View style={styles.itemBox}>
              <Text style={styles.newsTitle}>{news.TITLE}</Text>
              <Text style={styles.newsAuthor}>{news.AUTHOR}</Text>
              <TouchableOpacity style={styles.readMore}>
                <Text style={styles.readMoreText}>Read More...</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NewsList;
