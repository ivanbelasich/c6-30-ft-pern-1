import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
} from "react-native";
import { useAuth } from "../../../../hooks/useAuth";
import React from "react";
import styles from "./styles";
import globalStyles from "../../../../globalStyles/globalStyles";

const ProviderOrClient = ({ navigation }) => {
  const { setRol } = useAuth();

  const handleProvider = () => {
    setRol("provider");
    navigation.navigate("Register");
  };

  const handleClient = () => {
    setRol("user");
    navigation.navigate("Register");
  };

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
          style={styles.logoRol}
        />
        <Text style={styles.textContainer}>
          Elegi si vas a brindar un servicio:
        </Text>
        <View style={[styles.buttonProvider, globalStyles.normalButton]}>
          <TouchableHighlight
            style={globalStyles.button}
            onPress={handleProvider}
          >
            <Text style={styles.textButton}>Proveedor</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.marginView}>
          <Text style={styles.textContainer}>
            O si vas a consumir los disponibles:
          </Text>
          <View style={[styles.buttonProvider, globalStyles.normalButton]}>
            <TouchableHighlight
              style={globalStyles.button}
              onPress={handleClient}
            >
              <Text style={styles.textButton}>Cliente</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProviderOrClient;
