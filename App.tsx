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
            }}
          />
          <Drawer.Screen
            name="AulasDrawer"
            component={AulasStackNavigator}
            options={{
              title: 'Aulas',
              drawerLabel: 'Aulas',
            }}
          />
          <Drawer.Screen
            name="ConfiguracionDrawer"
            component={ConfiguracionScreen}
            options={{
              title: 'Configuración',
              drawerLabel: 'Configuración',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </CustomAulasProvider>
  );
}