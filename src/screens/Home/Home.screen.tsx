import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './Home.style';
import {fetchUser, selectAll} from '../../stores/user.reducer';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import Header from '../../components/Header';
import HomeBanner from '../../components/HomeBanner';
import BestSellors from '../../components/BestSellors';

const Home = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAll);

  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <Header />
      <HomeBanner />
      <BestSellors />
    </SafeAreaView>
  );
};

export default Home;
