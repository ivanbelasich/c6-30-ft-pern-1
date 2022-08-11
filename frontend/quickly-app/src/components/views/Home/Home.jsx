import { View, Text } from "react-native";
import FilterBar from "../../FilterBar/FilterBar";
import { Link } from "react-router-native";
import styles from "./style";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.color}>Home general</Text>
       <FilterBar />
      <Link to="/homeuser">
        <Text>Usuario</Text>
      </Link>
      <Link to="/homesupplier">
        <Text>Proveedor</Text>
      </Link>
      <Link to="/login">
        <Text>Login</Text>
      </Link>
    </View>
  );
};

export default Home;
