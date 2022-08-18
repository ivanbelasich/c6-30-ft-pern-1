import { View, Text } from "react-native";
import { Link } from "react-router-native";
import globalStyles from "../../../../globalStyles/globalStyles";

const Turns = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Turnos disponibles</Text>
      <Link to="/homeuser">
        <Text>Volver al homeuser</Text>
      </Link>
    </View>
  );
};

export default Turns;
