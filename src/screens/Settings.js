import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';

const { width } = Dimensions.get('window');

const initialUserInfo = {
  name: '',
  currency: 'usd',
  income: 0,
};

const Settings = ({ navigation }) => {
  const [formData, setFormData] = useState(initialUserInfo);

  const handleValueChange = (value, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'income' ? parseInt(value) || 0 : value,
    }));
  };

  const handlePress = async () => {
    Toast.show('User informations is saved.', {
      duration: Toast.durations.SHORT,
      animation: true,
    });
    navigation.goBack();
    await AsyncStorage.setItem('userInfo', JSON.stringify(formData));
  };

  const getUserData = async () => {
    const data = await AsyncStorage.getItem('userInfo');
    if (data) {
      setFormData(JSON.parse(data));
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Your Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleValueChange(text, 'name')}
        value={formData.name}
      />
      <Text style={styles.label}>Preferred Currency</Text>
      <View style={styles.currencyContainer}>
        <Pressable
          style={[
            styles.currencyButton,
            {
              backgroundColor:
                formData.currency === 'usd' ? 'darkblue' : 'white',
            },
          ]}
          onPress={() => handleValueChange('usd', 'currency')}
        >
          <Text
            style={[
              styles.currency,
              { color: formData.currency === 'usd' ? 'white' : 'black' },
            ]}
          >
            $
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.currencyButton,
            {
              backgroundColor:
                formData.currency === 'try' ? 'darkblue' : 'white',
            },
          ]}
          onPress={() => handleValueChange('try', 'currency')}
        >
          <Text
            style={[
              styles.currency,
              { color: formData.currency === 'try' ? 'white' : 'black' },
            ]}
          >
            ₺
          </Text>
        </Pressable>
      </View>
      <Text style={styles.label}>Monthly Income</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => handleValueChange(text, 'income')}
        value={String(formData.income)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
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
