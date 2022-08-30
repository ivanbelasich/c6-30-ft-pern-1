import { View, Text, TouchableHighlight } from "react-native";
import React from "react";

const ProviderOrClient = ({ navigation }) => {
  return (
    <View>
      <Text>Elegi que si vas a brindar un servicio:</Text>
      <TouchableHighlight onPress={() => console.log("Elegiste proveedor")}>
        <Text>Proveedor</Text>
      </TouchableHighlight>
      <Text>O si vas a consumir los disponibles:</Text>
      <TouchableHighlight onPress={() => console.log("Elegiste cliente")}>
        <Text>Cliente</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Register")}>
        <Text>¡Continuar con el registro!</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ProviderOrClient;
