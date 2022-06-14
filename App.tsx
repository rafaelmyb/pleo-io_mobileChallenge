import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import ExpenseDetails from './src/screens/ExpenseDetails';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          title: 'All Expenses',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}>
        <Screen name="Home" component={Home} />
        <Screen name="ExpenseDetails" component={ExpenseDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
