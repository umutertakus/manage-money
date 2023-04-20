import React, { useCallback, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectItems } from '../store/slices/appSlice';
import { formatNumber } from '../utils/helpers';
import { useFocusEffect } from '@react-navigation/native';

const ExpensesCard = ({ title, currency, monthlyIncome }) => {
  const items = useSelector(selectItems);

  const isIncome = title === 'Income' ? true : false;

  const [total, setTotal] = useState('');

  const calculateTotal = () => {
    let incomeTotal = 0;
    let expensesTotal = 0;
    items.forEach((item) => {
      if (item.income) {
        incomeTotal += item.amount;
      } else {
        expensesTotal += item.amount;
      }
    });
    const number = isIncome ? monthlyIncome + incomeTotal : expensesTotal;
    const formattedNumber = formatNumber(number);
    setTotal(formattedNumber);
  };

  useFocusEffect(
    useCallback(() => {
      calculateTotal();
    }, [items, monthlyIncome])
  );

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text style={styles.expenseText}>
        {currency === 'usd' ? '$' : '₺'}
        {total}
      </Text>
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
    marginBottom: 25,
  },
  expenseText: {
    color: '#ff725e',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
