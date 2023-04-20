import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Finance from '../components/Finance';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    currency: 'usd',
    income: 0,
  });

  const getUserInfo = async () => {
    const data = await AsyncStorage.getItem('userInfo');
    setUserInfo(JSON.parse(data));
  };

  useFocusEffect(
    useCallback(() => {
      getUserInfo();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header userInfo={userInfo} />
      <Finance userInfo={userInfo} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4328',
  },
});
