import { Text, View, Alert } from "react-native";
import React from "react";
import globalStyles from "../../globalStyles/globalStyles";

const Alerts = () => {
  const showAlert = () =>
    Alert.alert(
      "Estás seguro que deseas guardar el turno?",
      undefined,
      [
        {
          text: "Aceptar",
          onPress: () => Alert.alert("Turno agendado!"),
          style: "cancel",
        },
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          console.log(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );
  return (
    <View style={[globalStyles.button, globalStyles.normalButton]}>
      <Text onPress={showAlert} style={globalStyles.textButton}>
        + Guardar turno
      </Text>
    </View>
  );
}

export default Alerts;
