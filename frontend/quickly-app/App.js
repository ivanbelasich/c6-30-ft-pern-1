import { NativeRouter, Navigate, Route, Routes } from "react-router-native";
import "react-native-gesture-handler";
// Views
import Home from "./src/components/views/Home/Home.jsx";
import Turns from "./src/components/views/user/Turns/Turns.jsx";
import HomeUser from "./src/components/views/user/HomeUser/HomeUser.jsx";
import HomeSupplier from "./src/components/views/supplier/HomeSupplier.jsx";
import Login from "./src/components/views/auth/Login/Login.jsx";
import Register from "./src/components/views/auth/Register/Register.jsx";
// Components
import Notifications from "./src/components/views/user/Notifications/Notifications.jsx";
import FilterBar from "./src/components/FilterBar/FilterBar.jsx";
// Context
import { AuthProvider } from "./src/context/AuthContext.js";
// Hook
import { useAuth } from "./src/hooks/useAuth.js";
import Navigation from "./src/components/Navigations/Navigation.jsx";

const ProtectedRoute = ({ children }) => {
  const { authData } = useAuth();

  return authData ? <>{children}</> : <Navigate to="/login" replace={true} />;
};

const PublicRoute = ({ children }) => {
  const { authData } = useAuth();
  return !authData ? <>{children}</> : <Navigate to="/" replace={true} />;
};

export default function App() {
  const { loading } = useAuth();

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <AuthProvider>
      <NativeRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/homeuser"
            element={
              <ProtectedRoute>
                <HomeUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/homesupplier"
            element={
              <ProtectedRoute>
                <HomeSupplier />
              </ProtectedRoute>
            }
          />
          <Route
            path="/turns"
            element={
              <ProtectedRoute>
                <Turns />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/filterbar"
            element={
              <ProtectedRoute>
                <FilterBar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Routes>
      </NativeRouter>
    </AuthProvider>
  );
}
