import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContent from './frontend/components/AppContent';
import SignIn from './frontend/components/FarmerSignIn';
import FarmerSignIn from './frontend/components/FarmerSignIn';
import BuyerSignIn from './frontend/components/BuyerSignIn';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={AppContent} />
        <Stack.Screen name="FarmerSignIn" component={FarmerSignIn} />
        <Stack.Screen name="FarmerDashboard" component={require('./frontend/dashboards/FarmerDashboard').default} />
        <Stack.Screen name="BuyerSignIn" component={BuyerSignIn} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}