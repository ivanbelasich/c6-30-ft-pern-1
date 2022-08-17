import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";

import styles from "./styles";
import { theme } from "../../../../globalStyles/theme";

const Register = () => {
  return (
    <ImageBackground
      source={require("../../../../../assets/templates/TemplateRegister.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.secondary}
      />
      <View>
        <Image
          source={require("../../../../../assets/ClockRegister.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text>Nos encanta tenerte acá</Text>
      </View>
      <View>
        <Text>Somos Quickly,</Text>
        <Text>¿Cómo quieres que te llamemos?</Text>
      </View>
      <View>
        <TextInput />
      </View>
      <View>
        <TouchableHighlight>
          <Text>Registrar</Text>
        </TouchableHighlight>
      </View>
      <View>
        <Text>¿Ya tienescuenta?</Text>
        <Text>¡Inicia Sesión!</Text>
      </View>
    </ImageBackground>
  );
};

export default Register;
