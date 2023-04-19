import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import AddForm from './src/screens/AddForm';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: 'white' } }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
          name="Add Form"
          component={AddForm}
          options={{ title: 'Add Income / Expenditure' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
