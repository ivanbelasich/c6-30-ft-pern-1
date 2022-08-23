import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import globalStyles from "../../../../globalStyles/globalStyles";

const ForgetPassword = () => {
  return (
    <ScrollView>
      <MaterialCommunityIcons
        name="lock-open-variant"
        style={{ color: "#E2AB11", fontSize: 60 }}
      />
      <Text>
        ¡Todo tiene solucion! vamos a enviarte un codigo para iniciar el
        restablecimiento de la contraseña, por favor elige una de las opciones:
      </Text>
      <TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="lock-open-variant"
            style={{ color: "#E2AB11", fontSize: 60 }}
          />
          <View>
            <Text>Via Email:</Text>
            <Text>Lorem ipsum, dolor sit amet consectetur</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[globalStyles.normalButton]}>
        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.textButton}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;
