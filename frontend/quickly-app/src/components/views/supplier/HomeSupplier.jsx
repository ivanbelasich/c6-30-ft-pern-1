import { useEffect, useState } from "react";
import { TouchableWithoutFeedback, ScrollView, Text, View, Image, StatusBar, Alert } from "react-native";

// Styles
import globalStyles from "../../../globalStyles/globalStyles";
import { theme } from "../../../globalStyles/theme";
import { styles } from "./styles";

export default function HomeSupplier({ navigation }) {

  const [service, setService] = useState(null);

  useEffect(() => {
    setService({
      name: "Odontología",
      description: "Solicitar turno con anticipación",
      value: "120",
      date: {
        monday: [],
        tuesday: [],
        wednesday: ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
        thursday: ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
        friday: ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
        saturday: [],
        sunday: [],
      }
    });
  }, [])
  

  const handleAddService = () => {
    navigation.navigate('NewService');
  }
  
  const handleDeleteService = () => {
    Alert.alert('¿Estas seguro de eliminar el servicio?',
    undefined,
    [
      {
        text: "Accept",
        onPress: () => {
          setService(null);
          Alert.alert("Servicio eliminado!")
        },
        style: "cancel",
      },
      {
        text: "Cancel",
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
    });
  }

  return (
    <ScrollView >
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary}/>
      <View style={[globalStyles.container, styles.container]}>
        <View style={styles.imgContainer}>
          <Image source={require('../../../../assets/logo-quickly.png')} style={styles.imgLogo}/>
        </View>
        <View style={globalStyles.cardContainer}>
          {
            service ? (
              <>
                <Text>Nombre: {service?.name}</Text>
                <Text>Precio: {service?.value}</Text>
                <Text>Descripción: {service?.description}</Text>
                <View>
                  <Text>Horarios:</Text>
                  <View>
                    {
                      service?.date.monday.map(time => (
                        <View key={time}>
                          <Text>{time}</Text>
                        </View>
                      ))
                    }
                    {
                      service?.date.wednesday.map(time => (
                        <View key={time}>
                          <Text>{time}</Text>
                        </View>
                      ))
                    }
                  </View>
                </View>
              </>
            ) : (
              <>
                <Text style={[globalStyles.title, styles.title]}>Mi servicio</Text>
                <Text>Aún no tienes creado ningún servicio</Text>
              </>
            )
          }
          
        </View>
        {
          service ? (
            <View>
              <TouchableWithoutFeedback onPress={handleDeleteService}>
                <View style={globalStyles.button}>
                  <Text style={globalStyles.textButton}>Modificar servicio</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={handleDeleteService}>
                <View style={[globalStyles.button, globalStyles.cancelButton]}>
                  <Text style={globalStyles.textButton}>Eliminar servicio</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          ) : (
            <>
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
