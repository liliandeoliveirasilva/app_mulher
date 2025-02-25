import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import FertilityCyclePlusScreen from './src/screens/FertilityCyclePlusScreen';
import GravidezEmFocoScreen from './src/screens/GravidezEmFocoScreen';
import MenopausaSupportScreen from './src/screens/MenopausaSupportScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'FertilityCycle+') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'GravidezEmFoco') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'MenopausaSupport') {
              iconName = focused ? 'leaf' : 'leaf-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF1493',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen 
          name="FertilityCycle+" 
          component={FertilityCyclePlusScreen}
          options={{ title: 'Fertility & Cycle+' }}
        />
        <Tab.Screen 
          name="GravidezEmFoco" 
          component={GravidezEmFocoScreen}
          options={{ title: 'Gravidez em Foco' }}
        />
        <Tab.Screen 
          name="MenopausaSupport" 
          component={MenopausaSupportScreen}
          options={{ title: 'Menopausa Support' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
