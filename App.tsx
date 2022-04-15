import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Base, Typography } from './styles';
import Home from "./components/Home";
import Pick from "./components/Pick";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// API key: 56a00810bed2ea5cdba8d2ec55c7aa02

const Tab = createBottomTabNavigator();
const routeIcons = {
  "Lager": "home",
  "Plock": "list",
};



export default function App() {
  const [products , setProducts] = useState([]);

  return (
    <SafeAreaView style={Base.container}>
      <NavigationContainer style={Base.TabBar}>
        <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = routeIcons[route.name] || "alert";
      
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: { 
            ... Base.TabBar
          }
        })}
        
      >
          <Tab.Screen name="Lager">
            {() => <Home products={products} setProducts={setProducts} />}
          </Tab.Screen>
          <Tab.Screen name="Plock"> 
            {() => <Pick setProducts={setProducts} /> } 
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
