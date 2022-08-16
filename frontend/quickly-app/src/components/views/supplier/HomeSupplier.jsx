import { useState } from "react";
import { TouchableWithoutFeedback, ScrollView, Text, View, Image } from "react-native";

// Components
import { ServiceForm } from "../../Form/ServiceForm/ServiceForm";
import { HeaderBar } from "../../HeaderBar/HeaderBar";

// Styles
import globalStyles from "../../../globalStyles/globalStyles";
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
      <HeaderBar title="Mi servicio"/>
      <View style={globalStyles.container}>
        <View style={styles.imgContainer}>
          <Image source={require('../../../../assets/logo-quickly.png')} style={styles.imgLogo}/>
        </View>
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
              <View>
                <Text style={globalStyles.title}>Mi servicio</Text>
                <Text>Aún no tienes creado ningún servicio</Text>
              </View>
              <TouchableWithoutFeedback onPress={handleAddService}>
                <View style={[globalStyles.button, globalStyles.normalButton]}>
                  <Text style={globalStyles.textButton}>+ Crear servicio</Text>
                </View>
              </TouchableWithoutFeedback>
            </>
          )
        }
      </View>
    </ScrollView>
  );
}
