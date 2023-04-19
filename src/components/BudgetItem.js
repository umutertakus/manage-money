import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const BudgetItem = ({ element }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'Salary':
        return 'wallet';
      case 'Health':
        return 'medkit';
      case 'Shopping':
        return 'shopping-bag';
      case 'Investment':
        return 'chart-line';
      default:
        return 'wallet';
    }
  };

  const getBgColor = (name) => {
    switch (name) {
      case 'Salary':
        return '#ff725e';
      case 'Health':
        return '#ff4328';
      case 'Shopping':
        return '#ff649c';
      case 'Investment':
        return '#ffc635';
      default:
        return '#ff725e';
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={[
            styles.iconCover,
            { backgroundColor: getBgColor(element.name) },
          ]}
        >
          <FontAwesome5 name={getIcon(element.name)} size={24} />
        </View>
        <View style={styles.nameAndDate}>
          <Text style={{ fontWeight: 'bold' }}>{element.name}</Text>
          <Text style={{ fontSize: 11 }}>{element.date}</Text>
        </View>
      </View>
      <Text style={styles.amount}>
        {element.income ? '+' : '-'} {element.amount}
      </Text>
    </View>
  );
};

export default BudgetItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconCover: {
    borderRadius: 100,
    backgroundColor: '#ff649c',
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameAndDate: {
    marginLeft: 15,
    justifyContent: 'space-around',
  },
  amount: {
    fontWeight: '500',
  },
});
