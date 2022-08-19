import { useState } from "react";
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

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const handleRegister = () => {
    if (name == "Fran") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

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
      {show ? (
        <View>
          <View style={styles.directionTextLogo}>
            <View>
              <Text style={styles.textHello}>¡Hola</Text>
              <Text style={styles.textName}>{name}!</Text>
            </View>
            <Image
              source={require("../../../../../assets/ClockRegister.png")}
              resizeMode="contain"
              style={styles.logoPostRegister}
            />
          </View>
          <View style={styles.mainText}>
            <Text style={styles.textMainPost}>
              Por Favor llena la información
            </Text>
            <Text style={styles.textMainPost}>
              para completar el registro...
            </Text>
          </View>
          <View style={styles.marginButtonPost}>
            <Text style={styles.textNameInput}>Mail</Text>
            <TextInput
              style={styles.inputName}
              mode="outlined"
              placeholder="Ingresa tu Mail"
            ></TextInput>
            <Text style={styles.textPasswordInput}>Contraseña</Text>
            <TextInput
              style={styles.inputName}
              mode="outlined"
              placeholder="Ingresa tu Contraseña"
            ></TextInput>
          </View>
          <View style={styles.marginButtonRegister}>
            <View style={globalStyles.disabledButton}>
              <TouchableHighlight
                onPress={handleRegister}
                style={globalStyles.button}
              >
                <Text style={styles.textButton}>Registrar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      ) : (
        <View>
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
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.marginButton}>
            <View style={globalStyles.disabledButton}>
              <TouchableHighlight
                onPress={handleRegister}
                style={globalStyles.button}
              >
                <Text style={styles.textButton}>Registrar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      )}
      <View style={styles.marginDirection}>
        <View style={styles.direction}>
          <Text style={styles.textQuestionAccount}>¿Ya tienes cuenta?</Text>
          <TouchableHighlight onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textLogIn}>¡Inicia Sesión!</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;
