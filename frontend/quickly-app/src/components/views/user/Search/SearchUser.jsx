import { View, Text, TextInput } from "react-native";
import styles from "./styles";

const SearchUser = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Buscar proveedores"
      ></TextInput>
    </View>
  );
};

export default SearchUser;
