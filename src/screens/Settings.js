import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const { width } = Dimensions.get('window');

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Preferred Currency</Text>
      <View style={styles.currencyContainer}>
        <Pressable style={styles.currencyButton}>
          <Text style={styles.currency}>$</Text>
        </Pressable>
        <Pressable style={styles.currencyButton}>
          <Text style={styles.currency}>₺</Text>
        </Pressable>
      </View>
      <Text style={styles.label}>Monthly Income</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

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
  currencyContainer: {
    width: width - 20,
    flexDirection: 'row',
    gap: 10,
  },
  currencyButton: {
    width: (width - 30) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    height: 30,
  },
  currency: {
    fontSize: 20,
  },
});
