import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import globalStyles from "../../../../globalStyles/globalStyles";
import styles from "./styles";
import NewPassword from "../NewPassword/NewPassword";

const ForgetPassword = ({ navigation }) => {
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
            ¡Todo tiene solución! vamos a enviarte un código para iniciar el
            restablecimiento de la contraseña, por favor elige una de las
            opciones:
          </Text>
          <TouchableOpacity style={[styles.inputButton]}>
            <View style={styles.containerButton}>
              <MaterialCommunityIcons
                name="email"
                style={{ color: "#DD4E24", fontSize: 50 }}
              />
              <View style={styles.containerTextButton}>
                <Text>Vía Email:</Text>
                <Text>Lorem ipsum, dolor sit amet consectetur</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.marginButton}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={[globalStyles.button, globalStyles.normalButton]}
            >
              <Text style={globalStyles.textButton}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <NewPassword navigation={navigation} />
      )}
    </ScrollView>
  );
};

export default ForgetPassword;
