// Example user logins
import { Text, View } from "react-native";
import SearchUser from "../Search/SearchUser";
import styles from "./styles";

const HomeUser = () => {
  return (
    <View style={styles.color}>
      <Text>Usuario logeado despues de pasar autenticacion</Text>
      <SearchUser />
    </View>
  );
};

export default HomeUser;
