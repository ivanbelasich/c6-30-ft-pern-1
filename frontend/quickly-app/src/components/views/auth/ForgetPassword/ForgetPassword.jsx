import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import globalStyles from "../../../../globalStyles/globalStyles";
import styles from "./styles";

const ForgetPassword = () => {
  const [view, setView] = useState(true);

  const handleSubmit = () => {
    setView(false);
  };

  return (
    <ScrollView>
      {view ? (
        <View>
          <View style={styles.container}>
            <SimpleLineIcons
              name="lock-open"
              style={{ color: "#E2AB11", fontSize: 80 }}
            />
          </View>
          <Text style={styles.textMain}>
            ¡Todo tiene solucion! vamos a enviarte un codigo para iniciar el
            restablecimiento de la contraseña, por favor elige una de las
            opciones:
          </Text>
          <TouchableOpacity style={styles.inputButton}>
            <View style={[styles.containerButton]}>
              <MaterialCommunityIcons
                name="email"
                style={{ color: "#B13513", fontSize: 50 }}
              />
              <View style={styles.containerTextButton}>
                <Text>Via Email:</Text>
                <Text>Lorem ipsum, dolor sit amet consectetur</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Aca va la parte donde te llega el codigo.</Text>
      )}
      <View style={[globalStyles.normalButton, styles.marginButton]}>
        <TouchableOpacity onPress={handleSubmit} style={globalStyles.button}>
          <Text style={globalStyles.textButton}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;
