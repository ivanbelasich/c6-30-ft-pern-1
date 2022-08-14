import { useState } from "react";
import { TouchableWithoutFeedback, ScrollView, Text, View } from "react-native";
import { Link } from "react-router-native";
import globalStyles from "../../../globalStyles/globalStyles";
import { ServiceForm } from "../../Form/ServiceForm/ServiceForm";
import { styles } from "./styles";

export default function HomeSupplier() {

  const [service, setService] = useState(false);

  const handleAddService = () => {
    setService(true);
  }
  
  const handleDeleteService = () => {
    setService(false);
  }

  return (
    <ScrollView >
      <View style={globalStyles.container}>
        <Text style={styles.title}>Mi servicio</Text>
        {
          service ? (
            <View>
              {/* <Text>Nombre: {service?.name}</Text>
              <Text>Valor: {service?.value}</Text>
              <View>
                <Text>Horarios:</Text>
                {
                  service?.date.lunes.map(time => (
                    <Text>{time}</Text>
                  ))
                }
              </View> */}
              <ServiceForm />
              <TouchableWithoutFeedback onPress={handleDeleteService}>
                <View style={[globalStyles.button, globalStyles.cancelButton]}>
                  <Text style={globalStyles.textButton}>Cancelar</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          ) : (
            <>
              <Text>No tienes creado ningún servicio</Text>
              <TouchableWithoutFeedback onPress={handleAddService}>
                <View style={[globalStyles.button, globalStyles.normalButton]}>
                  <Text style={globalStyles.textButton}>Crear servicio</Text>
                </View>
              </TouchableWithoutFeedback>
            </>
          )
        }
      </View>
      <Link to="/">
        <Text>Volver al home</Text>
      </Link>
    </ScrollView>
  );
}
