import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import globalStyles from "../../../../globalStyles/globalStyles";
import { styles } from "./styles";

const NewPasswordSuccessful = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../../../assets/templates/TemplateRegister.png")}
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
          ¡Nueva Contraseña Guardada!
        </Text>
        <Text style={[styles.textMain, globalStyles.title]}>
          Ya puedes iniciar sesión
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

export default NewPasswordSuccessful;
