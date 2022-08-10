import { View, Text, TextInput } from "react-native";
import styles from "./styles";

const SearchUser = () => {
  return (
    <View style={styles.input}>
      <TextInput>Busqueda por parte del usuario</TextInput>
    </View>
  );
};

export default SearchUser;
