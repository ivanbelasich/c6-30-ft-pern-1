import { View, Text, TouchableHighlight } from "react-native";
import { Link, useNavigate } from "react-router-native";

import styles from "./style";

import { useAuth } from "../../../hooks/useAuth";

const Home = () => {

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/login", {replace: true});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.color}>Home general</Text>
      <Link to="/filterbar">
        <Text>Filter Bar</Text>
      </Link>
      <Link to="/homesupplier">
        <Text>Supplier</Text>
      </Link>
      <TouchableHighlight onPress={handleLogout}>
        <Text>Sign Out</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Home;
