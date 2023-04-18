import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import welcomeImage from '../../assets/welcome.jpg';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePress = async () => {
    navigation.navigate('Home');
    await AsyncStorage.setItem('isLoggedIn', 'yes');
  };

  const getLoginData = async () => {
    const data = (await AsyncStorage.getItem('isLoggedIn')) || 'no';
    if (data === 'yes') {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    getLoginData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.pictureBox}>
        <Image
          style={styles.image}
          source={welcomeImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.header}>Let's manage money with us!</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>
            {isLoggedIn ? 'Go' : 'Get started'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  pictureBox: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  bottomBox: {
    flex: 0.4,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 30,
    marginBottom: 40,
    borderRadius: 20,
    backgroundColor: '#e86a29',
  },
  image: {
    borderRadius: 10,
    height: 350,
    width: 350,
  },
  header: {
    margin: 10,
    fontSize: 36,
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#2e3032',
    borderRadius: 8,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});
