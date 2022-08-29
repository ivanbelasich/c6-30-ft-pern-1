import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
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
      setLoading(false);
    }
  };

  const signIn = async () => {
    const authDataToken = {
      user: "Provider",
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUHJvdmlkZXIiLCJhY2Nlc3MiOiJwcm92aWRlciIsImlzcyI6InF1aWNrbHkuY29tL2F1dGgiLCJhdWQiOiJxdWlja3kuY29tL2Zyb250IiwiZXhwIjoxNjYxNzEzODk1LCJpYXQiOjE2NjE2Mjc0OTV9.lnRRfr5sxFw8mxu5bF9KkP-2LJLFrb3Xb6aGRiknobg",
      refreshToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUHJvdmlkZXIiLCJhY2Nlc3MiOiJwcm92aWRlciIsImlzcyI6InF1aWNrbHkuY29tL2F1dGgiLCJhdWQiOiJxdWlja3kuY29tL2Zyb250IiwiZXhwIjoxNjY0MDczMjc0LCJpYXQiOjE2NjE0ODEyNzR9.cj009eJrLgzMo2RWwGzf3sizgrWE0k-Zb-1QQusqvFc",
    };

    setAuthData(authDataToken);

    SecureStore.setItemAsync("_token", JSON.stringify(authDataToken));
  };

  const signOut = async () => {
    setAuthData(null);

    await SecureStore.deleteItemAsync("_token");
  };

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
