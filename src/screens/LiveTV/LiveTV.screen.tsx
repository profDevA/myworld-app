import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './LiveTV.style';
import {fetchUser, selectAll} from '../../stores/user.reducer';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import Header from '../../components/Header';
import HomeBanner from '../../components/HomeBanner';
import BestSellors from '../../components/BestSellors';
import Magazines from '../../components/Magazines';
import {ScrollView} from 'react-native-gesture-handler';

const Home = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAll);

  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <Header />
      <ScrollView>
        <HomeBanner />
        <BestSellors />
        <Magazines />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
