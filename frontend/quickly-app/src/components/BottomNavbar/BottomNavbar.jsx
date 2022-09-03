import { Alert, Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Hooks
import { useAuth } from "../../hooks/useAuth";
// Views Provider
import HomeSupplier from "../views/supplier/HomeSupplier";
import CreateService from "../views/supplier/NewService/NewService";
import ProfileSupplier from "../views/supplier/ProfileSupplier/ProfileSupplier";
// Views User
import HomeUser from "../views/user/HomeUser/HomeUser";
import FilterBar from "../FilterBar/FilterBar";
import ProfileUser from "../views/user/ProfileUser/ProfileUser";
// Styles
import { theme } from "../../globalStyles/theme";

const Tab = createBottomTabNavigator();

export const TabsProvider = () => {

  const auth = useAuth();

  const handleLogout = () => {
    Alert.alert('¿Estas seguro de cerrar sesión?',
    undefined,
    [
      {
        text: "Aceptar",
        onPress: () => auth.signOut(),
        style: "cancel",
      },
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        console.log(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    });
  }
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size }) => {
        let iconName;

        if (route.name === 'HomeSupplier') {
          iconName = 'ios-home';
        } else if (route.name === 'NewService') {
          iconName = 'ios-add-circle';
        } else if (route.name === "ProfileSupplier") {
          iconName = 'ios-person-circle';
        }

        return <Ionicons name={iconName} size={size} color={focused ? theme.colors.secondary : theme.colors.disabled2}/>
      },
      tabBarActiveTintColor: theme.colors.secondary,
      tabBarInactiveTintColor: theme.colors.disabled2
    })}>
      <Tab.Screen name="HomeSupplier" component={HomeSupplier} options={{
          title: "Home",
          
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.background,
          headerRight: () => (
            <Pressable onPress={handleLogout}>
              <Ionicons name="ios-log-out-outline" size={35} color={theme.colors.background} style={{marginRight: 5}}/>
            </Pressable>
          )
        }}/>
      <Tab.Screen name="NewService" component={CreateService} options={{
          title: "Nuevo Servicio",
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.background,
        }}/>
      <Tab.Screen name="ProfileSupplier" component={ProfileSupplier} options={{
        title: "Perfil",
        headerStyle: {
          backgroundColor: theme.colors.secondary,
        },
        headerTintColor: theme.colors.background,
      }} />
    </Tab.Navigator>
  );
};

export const TabsUser = () => {

  const auth = useAuth();

  const handleLogout = () => {
    Alert.alert('¿Estas seguro de cerrar sesión?',
    undefined,
    [
      {
        text: "Aceptar",
        onPress: () => auth.signOut(),
        style: "cancel",
      },
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        console.log(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    });
  }
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size }) => {
        let iconName;

        if (route.name === 'HomeUser') {
          iconName = 'ios-home';
        } else if (route.name === 'NewTurn') {
          iconName = 'ios-add-circle';
        } else if (route.name === "ProfileUser") {
          iconName = 'ios-person-circle';
        }

        return <Ionicons name={iconName} size={size} color={focused ? theme.colors.secondary : theme.colors.disabled2}/>
      },
      tabBarActiveTintColor: theme.colors.secondary,
      tabBarInactiveTintColor: theme.colors.disabled2
    })}>
      <Tab.Screen name="HomeUser" component={HomeUser} options={{
          title: "Home",
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.background,
          headerRight: () => (
            <Pressable onPress={handleLogout}>
              <Ionicons name="ios-log-out-outline" size={35} color={theme.colors.background} style={{marginRight: 5}}/>
            </Pressable>
          )
        }}/>
      <Tab.Screen
          name="NewTurn"
          component={FilterBar}
          options={{
            title: "Nuevo turno",
            headerStyle: {
              backgroundColor: theme.colors.secondary,
            },
            headerTintColor: theme.colors.background,
          }}
        />
      <Tab.Screen name="ProfileUser" component={ProfileUser} options={{
        title: "Perfil",
        headerStyle: {
          backgroundColor: theme.colors.secondary,
        },
        headerTintColor: theme.colors.background,
      }} />
    </Tab.Navigator>
  );
};