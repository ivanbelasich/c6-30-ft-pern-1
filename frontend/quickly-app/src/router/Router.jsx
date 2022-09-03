import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Hook
import { useAuth } from "../hooks/useAuth";

// Views
import OrdersList from "../components/views/supplier/OrdersList/OrdersList";
import Login from "../components/views/auth/Login/Login.jsx";
import Register from "../components/views/auth/Register/Register.jsx";
import ForgetPassword from "../components/views/auth/ForgetPassword/ForgetPassword";
import RegisterSuccessful from "../components/views/auth/RegisterSuccessful/RegisterSuccessful";
import NewPasswordSuccessful from "../components/views/auth/NewPasswordSuccessful/NewPasswordSuccessful";
import ProviderOrClient from "../components/views/auth/ProviderOrClient/ProviderOrClient";

// Components
import { TabsProvider, TabsUser } from "../components/BottomNavbar/BottomNavbar";

import { theme } from "../globalStyles/theme";

const Stack = createStackNavigator();

const AppClientStack = () => {

  const auth = useAuth();

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabsUser} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
};

const AppProviderStack = () => {

  const auth = useAuth();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabsProvider} options={{ headerShown: false }}/>
      <Stack.Screen
        name="OrdersList"
        component={OrdersList}
        options={{
          title: "Servicio",
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.background,
        }}
      />
    </Stack.Navigator>
  )
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProviderOrClient"
        component={ProviderOrClient}
        options={{
          title: "¿Provedor o Cliente?",
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.background,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: "Registro",
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.background,
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          title: "Recuperar Contraseña",
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.background,
        }}
      />
      <Stack.Screen
        name="RegisterSuccessful"
        component={RegisterSuccessful}
        options={{
          headerTintColor: theme.colors.background,
        }}
      />
      <Stack.Screen
        name="NewPasswordSuccessful"
        component={NewPasswordSuccessful}
        options={{
          headerTintColor: theme.colors.background,
        }}
      />
    </Stack.Navigator>
  );
};

export const Router = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return (
      <>
        <Text>Cargando...</Text>
      </>
    );
  }

  return (
    <NavigationContainer>
      {authData?.tokens?.accessToken ? (authData?.access === "provider" ? <AppProviderStack /> : <AppClientStack />) : <AuthStack />}
    </NavigationContainer>
  );
};
