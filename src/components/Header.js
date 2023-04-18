import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={{ alignSelf: 'flex-end' }}>
        <FontAwesome5 name="credit-card" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.welcomeTextTop}>Hi,</Text>
      <Text style={styles.welcomeTextBottom}>welcome!</Text>
      <Text style={styles.balance}>$ 100.000</Text>
      <Text style={styles.balanceText}>your balance</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    flexDirection: 'column',
    margin: 20,
  },
  welcomeTextTop: {
    fontSize: 28,
    color: 'white',
  },
  welcomeTextBottom: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
    paddingBottom: 30,
  },
  balance: {
    fontSize: 36,
    color: 'white',
    fontWeight: '800',
    letterSpacing: 2,
  },
  balanceText: {
    fontSize: 28,
    color: 'white',
  },
});
