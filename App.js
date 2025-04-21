import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Paises from './screens/Paises';
import Maravillas from './screens/Maravillas';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarInactiveTintColor: '#f48b28',
      tabBarActiveTintColor: '#633204',
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Paises') {
          iconName = Platform.OS === 'ios' ? 'earth-outline' : 'earth';
        } else if (route.name === 'Maravilla') {
          iconName = Platform.OS === 'ios' ? 'star-outline' : 'star';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Paises" component={Paises} />
    <Tab.Screen name="Maravilla" component={Maravillas} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
