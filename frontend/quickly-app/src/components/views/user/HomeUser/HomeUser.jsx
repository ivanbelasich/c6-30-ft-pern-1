// Example user logins
import { Text, View, Button } from "react-native";
import { Link } from "react-router-native";
import globalStyles from "../../../../globalStyles/globalStyles";
import styles from "./styles";

const HomeUser = () => {
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
    </View>
  );
};

export default HomeUser;
