// Example user logins
import { Text, View, Button } from "react-native";
import { Link } from "react-router-native";
import globalStyles from "../../../../globalStyles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeUser = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>Foto de perfil</Text>
      <Text>Nombre y Apellido</Text>
      <Text></Text>
      <Link to="/turns">
        <Text>Turnos disponibles</Text>
      </Link>
      <Text></Text>
      <Link to="/notifications">
        <Text>Notificaciones</Text>
      </Link>
      <Text></Text>
      <Link to="/filterBar">
        <Text>Agendar Turnos</Text>
      </Link>
      <TouchableOpacity onPress={() => navigation.navigate("Notificaciones")}>
        <Text>Ir a notificationes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeUser;
