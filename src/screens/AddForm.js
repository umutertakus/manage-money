import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-root-toast';
import { useDispatch } from 'react-redux';
import { addIncomeOrExpenditure } from '../store/slices/appSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const AddForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isChecked, setChecked] = useState(false);
  const [amount, setAmount] = useState(0);

  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Salary', value: 'Salary' },
    { label: 'Health expenses', value: 'Health' },
    { label: 'Shopping', value: 'Shopping' },
    { label: 'Investment', value: 'Investment' },
  ]);

  const handlePress = async () => {
    if (selectValue && amount !== 0) {
      Toast.show(`New ${isChecked ? 'income' : 'expenditure'} added.`, {
        duration: Toast.durations.SHORT,
        animation: true,
      });

      const formattedDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      const object = {
        name: selectValue,
        date: formattedDate,
        income: isChecked,
        amount,
      };
      dispatch(addIncomeOrExpenditure(object));

      let allData = [];
      const data = await AsyncStorage.getItem('userItems');
      if (data) {
        allData = [...JSON.parse(data), object];
        await AsyncStorage.setItem('userItems', JSON.stringify(allData));
      } else {
        await AsyncStorage.setItem('userItems', JSON.stringify([object]));
      }

      navigation.goBack();
    } else {
      Toast.show('You must fill the required fields.', {
        duration: Toast.durations.SHORT,
        animation: true,
        backgroundColor: 'red',
        textColor: 'white',
        position: Toast.positions.CENTER,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ zIndex: 1000 }}>
        <DropDownPicker
          open={open}
          value={selectValue}
          items={items}
          setOpen={setOpen}
          setValue={setSelectValue}
          setItems={setItems}
          dropDownContainerStyle={{ zIndex: 9999 }}
          placeholder="Select income / expenditure type"
        />
      </View>
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(amount)}
        onChangeText={(text) => setAmount(parseInt(text) || 0)}
      />
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Is the amount you entered an income?</Text>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 10,
    gap: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: width - 20,
  },
  label: {
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    width: width - 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  checkbox: {
    height: 24,
    width: 24,
  },
});
