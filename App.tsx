import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import AulasScreen from './src/screens/AulasScreen';
import ConfiguracionScreen from './src/screens/ConfiguracionScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types/RootStackParamList';
import AulaScreen from './src/screens/AulaScreen';
import { CustomAulasProvider } from './src/providers/AulasContext';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();

function AulasStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AulasStack"
        component={AulasScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AulaStack"
        component={AulaScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CustomAulasProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeDrawer">
          <Drawer.Screen
            name="HomeDrawer"
            component={HomeScreen}
            options={{
              title: 'Inicio',
              drawerLabel: 'Inicio',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
              drawerActiveTintColor: '#4F98CA',
            }}
          />
          <Drawer.Screen
            name="AulasDrawer"
            component={AulasStackNavigator}
            options={{
              title: 'Aulas',
              drawerLabel: 'Aulas',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="school-outline" size={size} color={color} />
              ),
              drawerActiveTintColor: '#4F98CA',
            }}
          />
          <Drawer.Screen
            name="ConfiguracionDrawer"
            component={ConfiguracionScreen}
            options={{
              title: 'Configuración',
              drawerLabel: 'Configuración',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" size={size} color={color} />
              ),
              drawerActiveTintColor: '#4F98CA',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </CustomAulasProvider>
  );
}