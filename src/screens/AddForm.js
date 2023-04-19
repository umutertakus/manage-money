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

const { width } = Dimensions.get('window');

const AddForm = () => {
  const [isChecked, setChecked] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Salary', value: 'Salary' },
    { label: 'Health expenses', value: 'Health' },
    { label: 'Shopping', value: 'Shopping' },
    { label: 'Investment', value: 'Investment' },
  ]);

  return (
    <View style={styles.container}>
      <View style={{ zIndex: 1000 }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          dropDownContainerStyle={{ zIndex: 9999 }}
          placeholder="Select income / expenditure type"
        />
      </View>
      <Text style={styles.label}>Amount</Text>
      <TextInput style={styles.input} keyboardType="numeric" />
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Is the amount you entered an income?</Text>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
      </View>
      <TouchableOpacity style={styles.button}>
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
