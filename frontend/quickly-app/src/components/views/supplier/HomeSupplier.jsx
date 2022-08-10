import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { styles } from "./styles";

export default function HomeSupplier() {
  return (
    <View style={styles.container}>
      <Text>Vista home - supplier</Text>
      <Link to="/">
        <Text>Volver al home</Text>
      </Link>
    </View>
  );
}
