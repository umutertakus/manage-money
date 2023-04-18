import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const ExpensesCard = ({ title, expenses }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text style={styles.expenseText}>${expenses}</Text>
    </View>
  );
};

export default ExpensesCard;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: width / 2.5,
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  expenseText: {
    color: '#ff725e',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
