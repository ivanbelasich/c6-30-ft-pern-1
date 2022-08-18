import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  StatusBar,
  Image,
  TouchableHighlight,
} from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./styles";
import { theme } from "../../../../globalStyles/theme";
import globalStyles from "../../../../globalStyles/globalStyles";

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
      <Text style={styles.textMain}>Nos encanta tenerte acá</Text>
      <View style={styles.block}>
        <Text style={styles.textSize}>Somos Quickly,</Text>
        <Text style={styles.textSize}>¿Cómo quieres que te llamemos?</Text>
      </View>
      <View style={styles.marginInput}>
        <TextInput
          style={styles.inputName}
          mode="outlined"
          placeholder="Ingresa tu nombre"
        />
      </View>
      <View style={styles.marginButton}>
        <View style={globalStyles.disabledButton}>
          <TouchableHighlight
            onPress={() => console.log("Registrar nombre")}
            style={globalStyles.button}
          >
            <Text style={styles.textButton}>Registrar</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.marginDirection}>
        <View style={styles.direction}>
          <Text style={styles.textQuestionAccount}>¿Ya tienes cuenta?</Text>
          <Text style={styles.textLogIn}>¡Inicia Sesión!</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;
