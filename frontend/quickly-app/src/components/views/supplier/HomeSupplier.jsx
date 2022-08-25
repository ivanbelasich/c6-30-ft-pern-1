import { useEffect, useState } from "react";
import { TouchableWithoutFeedback, ScrollView, Text, View, Image, StatusBar, Alert } from "react-native";

// Styles
import globalStyles from "../../../globalStyles/globalStyles";
import { theme } from "../../../globalStyles/theme";
import { CardService } from "../../CardService/CardService";
import { styles } from "./styles";

export default function HomeSupplier({ navigation }) {

  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices("");
  }, [services])

  const getServices = (path) => {
    fetch('https://quickly-a.herokuapp.com/api/provider?user=Provider'+path)
      .then(res => res.json())
      .then(data => {
        listServices(data.payload.Services);
      });
  }

  const listServices = (data) => {
    setServices(data);
  }

  const handleAddService = () => {
    navigation.navigate('NewService');
  }

  const handleDeleteService = (id) => {
    Alert.alert('¿Estas seguro de eliminar el servicio?',
    undefined,
    [
      {
        text: "Accept",
        onPress: () => {
            console.log(id)
            fetch("https://quickly-a.herokuapp.com/api/service", {
                method: 'DELETE',
                body: JSON.stringify(id),
                // headers
            })
            .then(res => res.json())
            .then(data => console.log(data));
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
      <View style={[globalStyles.container, styles.container]}>
        <View style={styles.imgContainer}>
          <Image source={require('../../../../assets/logo-quickly.png')} style={styles.imgLogo}/>
        </View>
        <View style={globalStyles.cardContainer}>
          <Text style={[globalStyles.title, styles.title]}>{services?.length > 1 ? "Mis servicios" : "Mi servicio"}</Text>
          {
            services ? (
              <>
                {
                  services.map(service => <CardService key={service.id} data={service} handleDelete={handleDeleteService} />)
                }
              </>
            ) : (
              <>
                <Text>Aún no tienes creado ningún servicio</Text>
              </>
            )
          }
          
        </View>
        <TouchableWithoutFeedback onPress={handleAddService}>
          <View style={[globalStyles.button, globalStyles.normalButton]}>
            <Text style={globalStyles.textButton}>+ Crear servicio</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}
