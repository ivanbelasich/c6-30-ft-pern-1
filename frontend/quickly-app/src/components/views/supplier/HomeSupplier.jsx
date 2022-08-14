import { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { Link } from "react-router-native";
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
      <View style={styles.container}>
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
              <Button title="Cancelar" onPress={handleDeleteService} color="red"/>
            </View>
          ) : (
            <>
              <Text>No tienes creado ningún servicio</Text>
              <Button title="Crear Servicio" onPress={handleAddService}/>
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
