import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
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
