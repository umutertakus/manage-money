import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ExpensesCard from './ExpensesCard';
import BudgetItem from './BudgetItem';

const mock = [
  {
    name: 'Salary',
    date: 'Oct 22, 2021',
    income: true,
    amount: '100.000',
  },
  {
    name: 'Health',
    date: 'Oct 22, 2021',
    income: true,
    amount: '100.000',
  },
  {
    name: 'Shopping',
    date: 'Oct 22, 2021',
    income: true,
    amount: '100.000',
  },
  {
    name: 'Investment',
    date: 'Oct 22, 2021',
    income: true,
    amount: '100.000',
  },
];

const Finance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Finance Balance</Text>
      <View style={styles.cardContainer}>
        <ExpensesCard title="Income" expenses="200.000" />
        <ExpensesCard title="Expenses" expenses="10.000" />
      </View>
      <Text style={styles.header}>Budget</Text>
      <ScrollView style={{ marginHorizontal: 5, marginVertical: 10 }}>
        {mock.map((element, index) => (
          <BudgetItem key={index} element={element} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button}>
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
