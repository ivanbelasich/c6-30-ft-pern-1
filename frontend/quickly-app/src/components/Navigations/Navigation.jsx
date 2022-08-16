import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../views/Home/Home.jsx";
import HomeUser from "../views/user/HomeUser/HomeUser.jsx";
import Notifications from "../views/user/Notifications/Notifications.jsx";

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createStackNavigator();

const MyStack = () => {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeUser">
      <HomeStackNavigator.Screen
        name="Perfil de usuario"
        component={HomeUser}
      />
      <HomeStackNavigator.Screen
        name="Notificaciones"
        component={Notifications}
      />
    </HomeStackNavigator.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Profile"
        component={MyStack}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Navigation;
