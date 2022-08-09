import { StyleSheet, Text, View } from "react-native";
import { NativeRouter } from "react-router-native";
import Navigation from "./src/components/Navigations/Navigation.jsx";

export default function App() {
  return (
    <NativeRouter>
      <Navigation />
    </NativeRouter>
  );
}
