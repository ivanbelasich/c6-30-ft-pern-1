import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  console.log(authData);

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
      setLoading(false);
    }
  };

  const signIn = async () => {
    SecureStore.setItemAsync("_token", JSON.stringify(authData));
  };

  const signOut = async () => {
    setAuthData(null);

    await SecureStore.deleteItemAsync("_token");
  };

  return (
    <AuthContext.Provider
      value={{ setAuthData, authData, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
