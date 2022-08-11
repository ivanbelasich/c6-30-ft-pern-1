import { View, Text } from "react-native";
import { Link } from "react-router-native";
import styles from "./style";

const Home = () => {
  return (
    <View>
      <Text style={styles.color}>Home general</Text>
      <Link to="/filterbar">
        <Text>Filter Bar</Text>
      </Link>
      <Link to="/login">
        <Text>Login</Text>
      </Link>
    </View>
  );
};

export default Home;
