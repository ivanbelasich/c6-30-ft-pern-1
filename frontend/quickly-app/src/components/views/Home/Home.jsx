import { View, Text, TouchableHighlight, ScrollView, StatusBar } from "react-native";

import { theme } from "../../../globalStyles/theme";
import styles from "./style";

import { useAuth } from "../../../hooks/useAuth";

const Home = ({ navigation }) => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.signOut();
  }

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary}/>
      <View style={styles.container}>
        <Text style={styles.color}>Home general</Text>
        <TouchableHighlight onPress={() => navigation.navigate('HomeSupplier')}>
          <Text>Home Supplier</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Turns')}>
          <Text>Pedir turno</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleLogout}>
          <Text>Sign Out</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

export default Home;
