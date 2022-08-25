import { Text, TouchableHighlight, View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from "react";

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
        style={{ color: "#479BB6", fontSize: 80 }}
      />
      {view ? (
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
          <TouchableHighlight onPress={handleSubmitNewPassword}>
            <Text>Continuar</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <View>
          <Text>
            El Código se envió al “Numero de Contacto” Escribe el codigo:
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput mode="outlined" placeholder="Ingresa tu contraseña" />
            <TextInput mode="outlined" placeholder="Ingresa tu contraseña" />
            <TextInput mode="outlined" placeholder="Ingresa tu contraseña" />
            <TextInput mode="outlined" placeholder="Ingresa tu contraseña" />
          </View>
          <Text>Reenviando Código en 52 s</Text>
          <TouchableHighlight onPress={handleSubmit}>
            <Text>Continuar</Text>
          </TouchableHighlight>
        </View>
      )}
    </ScrollView>
  );
};

export default NewPassword;
