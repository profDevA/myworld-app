import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from './Home.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchUser, selectAll} from '../../stores/user.reducer';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import Header from '../../components/Header';
import HomeBanner from '../../components/HomeBanner';

const Home = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAll);

  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <Header />
      <HomeBanner />
    </SafeAreaView>
  );
};

const styleUser = StyleSheet.create<any>({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10,
});

export default Home;
