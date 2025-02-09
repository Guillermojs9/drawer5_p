import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import AulasScreen from './src/screens/AulasScreen';
import ConfiguracionScreen from './src/screens/ConfiguracionScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inicio',
            drawerLabel: 'Inicio',
          }}
        />
        <Drawer.Screen
          name="Aulas"
          component={AulasScreen}
          options={{
            title: 'Aulas',
            drawerLabel: 'Aulas',
          }}
        />
        <Drawer.Screen
          name="Configuracion"
          component={ConfiguracionScreen}
          options={{
            title: 'Configuración',
            drawerLabel: 'Configuración',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}