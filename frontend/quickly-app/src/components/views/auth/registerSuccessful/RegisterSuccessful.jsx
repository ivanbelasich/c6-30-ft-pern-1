import { View, Text, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import globalStyles from "../../../../globalStyles/globalStyles";
import { styles } from "./styles";

const RegisterSuccessful = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../../../assets/templates/TemplateRegisterSmall.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View>
        <Image
          source={require("../../../../../assets/ClockRegister.png")}
          resizeMode="contain"
          style={styles.container}
        />
        <Text style={[styles.textSuccessful, globalStyles.title2]}>
          ¡Registro Exitoso!
        </Text>
        <Text style={[styles.textMain, globalStyles.title]}>
          Ya formas parte de Quickly
        </Text>
        <Text style={[styles.textWelcome, globalStyles.title2]}>
          ¡Bienvenido!
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.button}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegisterSuccessful;
