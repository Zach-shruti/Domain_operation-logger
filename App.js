import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/DomainOperation/HomeScreen';
import AddNew from './src/screens/DomainOperation/AddNew';
import ListView from './src/screens/DomainOperation/ListView';
import Attribute from './src/screens/DomainOperation/Attribute';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="AddNew" 
          component={AddNew} 
          options={{ title: 'Add New' }} 
        />
        <Stack.Screen 
          name="ListView" 
          component={ListView} 
          options={{ title: 'List View' }} 
        />
        <Stack.Screen 
          name="Attribute" 
          component={Attribute} 
          options={{ title: 'Attribute' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
















































































