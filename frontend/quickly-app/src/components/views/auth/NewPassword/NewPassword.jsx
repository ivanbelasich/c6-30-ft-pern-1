import { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";

import Ionicons from "react-native-vector-icons/Ionicons";
import globalStyles from "../../../../globalStyles/globalStyles";
import styles from "./styles";

const NewPassword = () => {
  const [view, setView] = useState(true);

  const [passwordVisible, setPasswordVisible] = useState(true);

  const handleSubmit = () => {
    setView(false);
  };

  const handleNewPassword = () => {
    console.log("guardar nueva pw");
  };

  return (
    <ScrollView>
      <Ionicons
        name="shield-checkmark"
        style={{ color: "#479BB6", fontSize: 80 }}
      />
      {view ? (
        <View>
          <Text>
            El Código se envió al “Numero de Contacto” Escribe el codigo:
          </Text>
          <View>
            <Text>inputs x 4</Text>
          </View>
          <Text>Reenviando Código en 52 s</Text>
          <View style={[globalStyles.normalButton, styles.marginButton]}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={globalStyles.button}
            >
              <Text style={globalStyles.textButton}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Text>Crea una nueva contraseña</Text>
          <TextInput
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
          <View style={[globalStyles.normalButton, styles.marginButton]}>
            <TouchableOpacity
              onPress={handleNewPassword}
              style={globalStyles.button}
            >
              <Text style={globalStyles.textButton}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default NewPassword;
