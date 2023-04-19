import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <Navigation />
            <StatusBar style="auto" />
          </SafeAreaView>
        </SafeAreaProvider>
      </RootSiblingParent>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
