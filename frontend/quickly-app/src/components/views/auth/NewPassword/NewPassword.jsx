import { Text, TouchableHighlight, View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import styles from "./styles";
import globalStyles from "../../../../globalStyles/globalStyles";

import Ionicons from "react-native-vector-icons/Ionicons";

const NewPassword = ({ navigation }) => {
  const [view, setView] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(true);

  const handleSubmit = () => {
    setView(true);
  };

  const handleSubmitNewPassword = () => {
    navigation.navigate("NewPasswordSuccessful");
  };

  return (
    <ScrollView>
      <Ionicons
        name="ios-shield-checkmark"
        style={{
          color: "#479BB6",
          fontSize: 80,
          flexDirection: "row",
          textAlign: "center",
          marginTop: 40,
        }}
      />
      {view ? (
        <View>
          <Text style={[styles.textContainer, styles.marginContainer]}>
            Crea una nueva contraseña
          </Text>
          <View style={styles.container}>
            <TextInput
              style={styles.inputContainer}
              mode="outlined"
              placeholder="Ingresa tu contraseña"
              secureTextEntry={passwordVisible}
              right={
                <TextInput.Icon
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  name={passwordVisible ? "eye" : "eye-off"}
                />
              }
            />
          </View>
          <View style={styles.marginButton}>
            <TouchableHighlight
              style={[globalStyles.button, globalStyles.normalButton]}
              onPress={handleSubmitNewPassword}
            >
              <Text style={globalStyles.textButton}>Continuar</Text>
            </TouchableHighlight>
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.marginContainer}>
            <Text style={styles.textContainer}>
              El Código se envió al “Número de Contacto”
            </Text>
            <Text style={styles.textContainer}>Escribe el código:</Text>
          </View>
          <View style={styles.container}>
            <TextInput
              mode="outlined"
              placeholder="Ingresa el codigo recibido"
              style={styles.inputContainer}
            />
          </View>
          <Text style={styles.textCounter}>Reenviando Código en 52 s</Text>
          <View style={styles.marginButton}>
            <TouchableHighlight
              style={[globalStyles.button, globalStyles.normalButton]}
              onPress={handleSubmit}
            >
              <Text style={globalStyles.textButton}>Continuar</Text>
            </TouchableHighlight>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default NewPassword;
