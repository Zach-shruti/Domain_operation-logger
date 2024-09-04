import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DLHomeScreen from './src/screens/DLHomeScreen';
import DLaddnew from './src/screens/DLaddnew';
import DLlistsview from './src/screens/DLlistsview';
import DLattributes from './src/screens/DLattributes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DLHome">
        <Stack.Screen name="DLhome" component={DLHomeScreen} />
        <Stack.Screen name="DLaddnew" component={DLaddnew} />
        <Stack.Screen name="DLlistsview" component={DLlistsview} />
        <Stack.Screen name="DLattributes" component={DLattributes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




































































