import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Navigation />
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
