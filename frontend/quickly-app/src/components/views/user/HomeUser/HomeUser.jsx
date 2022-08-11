// Example user logins
import { Text, View, Button } from "react-native";
import { Link } from "react-router-native";
import SearchUser from "../Search/SearchUser";
import globalStyles from "../../../../globalStyles/globalStyles";
import styles from "./styles";

const HomeUser = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Usuario logeado despues de pasar autenticacion</Text>
      <Text>Buscar proveedores para agendar turnos</Text>
      <SearchUser />
      <Link to="/turns">
        <Text>Turnos disponibles</Text>
      </Link>
      <Link to="/notifications">
        <Text>Notificaciones</Text>
      </Link>
      <Link to="/">
        <Text>Volver al home</Text>
      </Link>
    </View>
  );
};

export default HomeUser;
