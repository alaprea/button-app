import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./views/home";
import Favorites from './views/favorites';
import Header from './components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from './styles/colors';

const Tab = createBottomTabNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>

      <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Favorites') iconName = focused ? 'star' : 'star-outline';

            return <Ionicons name={iconName} size={28} color={color}/>;
          },
          tabBarActiveTintColor: Colors.action,
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 14, marginBottom: (Platform.OS === 'ios') ? "5%" : "8%"},
          tabBarStyle: { backgroundColor: Colors.background, height: (Platform.OS === 'ios') ? "12%" : "10%", paddingTop: "1%", borderTopColor: "gray", borderTopWidth: 1},
        })}>

        <Tab.Screen name="Home" component={Home} options={{headerShown: true, header: () => <Header/>}}/>
        <Tab.Screen name="Favorites" component={Favorites} options={{headerShown: true, header: () => <Header/>}}/>

      </Tab.Navigator>

    </NavigationContainer>
  )
}