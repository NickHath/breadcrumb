import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToursScreen from './src/screens/ToursScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import TourScreen from './src/screens/TourScreen';

const Tab = createBottomTabNavigator();
  
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Tours'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFA000'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 20,
            paddingBottom: 8,
          },
        }}
      >
        <Tab.Screen name='Tours' component={ToursScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
        <Tab.Screen name='Tour' component={TourScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}