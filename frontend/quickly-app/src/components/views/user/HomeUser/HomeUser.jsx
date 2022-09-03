import { StatusBar, Text, TouchableHighlight, View, } from "react-native";
// Styles
import globalStyles from "../../../../globalStyles/globalStyles";
import { theme } from "../../../../globalStyles/theme";


const HomeUser = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary}/>
      <Text>Aquí debería haber una lista de turnos</Text>
    </View>
  );
};

export default HomeUser;
