import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./src/components/views/Home/Home.jsx";
import Turns from "./src/components/views/user/Turns/Turns.jsx";
import Navigation from "./src/components/Navigations/Navigation.jsx";
import HomeUser from "./src/components/views/user/HomeUser/HomeUser.jsx";
import HomeSupplier from "./src/components/views/supplier/HomeSupplier.jsx";
import Login from "./src/components/views/auth/Login/Login.jsx";
export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeuser" element={<HomeUser />} />
        <Route path="/homesupplier" element={<HomeSupplier />} />
        <Route path="/turns" element={<Turns />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Navigation /> */}
    </NativeRouter>
  );
}
