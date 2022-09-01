import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});

  const [rol, setRol] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function preload() {
      await loadStorageData();
      if (authData.tokens) await refreshTokens()
    }
    preload()
  }, []);

  const loadStorageData = async () => {
    try {
      const authDataSerialized = await SecureStore.getItemAsync("_token");
      if (authDataSerialized) {
        const authDataToken = JSON.parse(authDataSerialized);
        setAuthData(authDataToken);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  const signIn = async (user, password) => {
    await fetch("https://quickly-a.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        user,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAuthData(data.payload)
        SecureStore.setItemAsync("_token", JSON.stringify(data.payload))
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false))

  };

  const refreshTokens = async () => {
    setLoading(true)
    try {
      let response = await fetch("https://quickly-a.herokuapp.com/api/auth/refresh", {
        method: "POST",
        body: JSON.stringify({
          refreshToken: authData.refreshToken
        }),
        headers: {
          "Content-Type": "application/json",
          'authorization': authData.accessToken
        }
      })
      let data = await response.json()
      setAuthData(data)
    }
    catch (error) {
      console.log(error)
    }
    setLoading(false)


  }

  const signOut = async () => {
    setAuthData(null);

    await SecureStore.deleteItemAsync("_token");
  };

  return (
    <AuthContext.Provider
      value={{ setAuthData, authData, loading, signIn, signOut, setRol, rol }}
    >
      {children}
    </AuthContext.Provider>
  );
};
