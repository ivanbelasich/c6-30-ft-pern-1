import { View, Text, TouchableHighlight, ScrollView } from "react-native";

import styles from "./style";

import { useAuth } from "../../../hooks/useAuth";
import { HeaderBar } from "../../HeaderBar/HeaderBar";

<<<<<<< HEAD
const Home = ({ navigation }) => {

=======
const Home = () => {
>>>>>>> 35c6f1333dd3ad9692722a059a54d5a7f46cafa8
  const auth = useAuth();

  const handleLogout = () => {
    auth.signOut();
<<<<<<< HEAD
  }

  return (
    <ScrollView>
=======
    navigate("/login", { replace: true });
  };

  return (
    <ScrollView>
      <HeaderBar title="Home" />
>>>>>>> 35c6f1333dd3ad9692722a059a54d5a7f46cafa8
      <View style={styles.container}>
        <Text style={styles.color}>Home general</Text>
        <TouchableHighlight onPress={() => navigation.navigate('HomeSupplier')}>
          <Text>Home Supplier</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleLogout}>
          <Text>Sign Out</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

export default Home;
