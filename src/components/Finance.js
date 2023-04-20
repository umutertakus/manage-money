import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncStorageData, selectItems } from '../store/slices/appSlice';
import BudgetItem from './BudgetItem';
import ExpensesCard from './ExpensesCard';

const Finance = ({ userInfo }) => {
  const { income: monthlyIncome, currency } = userInfo;

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const items = useSelector(selectItems);

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchAsyncStorageData());
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Finance Balance</Text>
      <View style={styles.cardContainer}>
        <ExpensesCard
          title="Income"
          currency={currency}
          monthlyIncome={monthlyIncome}
        />
        <ExpensesCard title="Expenses" currency={currency} />
      </View>
      <Text style={styles.header}>Budget</Text>
      <ScrollView style={{ marginHorizontal: 5, marginVertical: 10 }}>
        {items.map((element, index) => (
          <BudgetItem key={index} element={element} currency={currency} />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Add Form')}
      >
        <FontAwesome5 name="plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Finance;

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 40,
  },
  header: {
    fontSize: 24,
    letterSpacing: 1,
  },
  cardContainer: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#FF4328',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
  },
});
