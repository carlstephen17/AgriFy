import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppContent from './frontend/components/AppContent';
import FarmerSignUp from './frontend/components/FarmerSignUp';
import BuyerSignUp from './frontend/components/BuyerSignUp';
import FarmerDashboard from './frontend/dashboards/FarmerDashboard';
import BuyerDashboard from './frontend/dashboards/BuyerDashboard';
import FarmerLogIn from './frontend/components/FarmerLogIn';
import BuyerLogIn from './frontend/components/BuyerLogIn';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppContent"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AppContent" component={AppContent} />
        <Stack.Screen name="FarmerSignUp" component={FarmerSignUp} />
        <Stack.Screen name="FarmerDashboard" component={FarmerDashboard} />
        <Stack.Screen name="BuyerSignUp" component={BuyerSignUp} />
        <Stack.Screen name="BuyerDashboard" component={BuyerDashboard} />
        <Stack.Screen name="FarmerLogIn" component={FarmerLogIn} />
        <Stack.Screen name="BuyerLogIn" component={BuyerLogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}