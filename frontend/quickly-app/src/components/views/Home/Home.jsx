import { View, Text, TouchableHighlight, ScrollView } from "react-native";

import styles from "./style";

import { useAuth } from "../../../hooks/useAuth";
import { HeaderBar } from "../../HeaderBar/HeaderBar";

const Home = ({ navigation }) => {

  const auth = useAuth();

  const handleLogout = () => {
    auth.signOut();
  }

  return (
    <ScrollView>
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
