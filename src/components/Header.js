import { FontAwesome5 } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formatNumber } from '../utils/helpers';

const Header = ({ userInfo }) => {
  const { name, currency, income } = userInfo;
  const navigation = useNavigation();

  const [monthlyIncome, setMonthlyIncome] = useState(0);

  const handlePress = () => {
    navigation.navigate('Settings', {
      transitionSpec: {
        open: { delay: 100, animation: 'timing' },
        close: { animation: 'timing' },
      },
    });
  };

  const getMonthlyIncome = () => {
    const formattedIncome = formatNumber(income);
    setMonthlyIncome(formattedIncome);
  };

  const getHeaderText = () => {
    if (name) {
      return `Hi ${name},`;
    } else return 'Hi,';
  };

  useFocusEffect(
    useCallback(() => {
      getMonthlyIncome();
    }, [income])
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={{ alignSelf: 'flex-end' }}>
        <FontAwesome5 name="credit-card" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.welcomeTextTop}>{getHeaderText()}</Text>
      <Text style={styles.welcomeTextBottom}>welcome!</Text>
      <Text style={styles.balance}>
        {currency === 'usd' ? '$' : '₺'}
        {income}
      </Text>
      <Text style={styles.balanceText}>your monthly income</Text>
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
