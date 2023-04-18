import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Finance from '../components/Finance';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Finance />
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
