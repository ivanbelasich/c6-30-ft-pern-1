import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import globalStyles from "../../../../globalStyles/globalStyles";

const Notifications = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Notifications</Text>
      <Link to="/homeuser">
        <Text>Volver al homeuser</Text>
      </Link>
    </View>
  );
};

export default Notifications;
