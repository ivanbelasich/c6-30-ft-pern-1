import React, { useState } from "react";
import { View, Text, Button, FlatList, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Calendar from "../Calendar/Calendar";
import { Link } from "react-router-native";
import globalStyles from "../../globalStyles/globalStyles";

const categories = [
  { key: 1, label: "Dermatología", value: "Dermatología" },
  { key: 2, label: "Peluquería", value: "Peluquería" },
  { key: 3, label: "Traumatología", value: "Traumatología" },
];

const usuarios = [
  {
    key: 1,
    label: "Jorge",
    value: "Dermatología",
  },
  {
    key: 2,
    label: "Raul",
    value: "Peluquería",
  },
  {
    key: 3,
    label: "Luz",
    value: "Traumatología",
  },
  {
    key: 4,
    label: "Martina",
    value: "Peluquería",
  },
];

const FilterBar = ({ navigation }) => {
  const [category, setCategories] = useState("");
  const [provider, setProvider] = useState("");
  const [data, setData] = useState([]);

  function filter() {
    const dataFiltered = usuarios.filter((el) =>
      el.category.includes(category)
    );
    setData(dataFiltered);
  }

  const placeholder = {
    label: "Selecciona de la lista",
    value: null,
    color: "#9EA0A4",
  };

  const showAlert = () =>
    Alert.alert(
      "Estás seguro que deseas guardar el turno?",
      undefined,
      [
        {
          text: "Accept",
          onPress: () => Alert.alert("Turno agendado!"),
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
      }
    );

  return (
    <View>
      <Text>Selecciona una categoría:</Text>
      <RNPickerSelect
        onValueChange={(value) => setCategories(value)}
        items={categories}
        placeholder={placeholder}
      />
      <Text>Selecciona un profesional:</Text>
      <RNPickerSelect
        onValueChange={(value) => setProvider(value)}
        placeholder={placeholder}
        items={usuarios}
      />
      <Text>Selecciona la fecha:</Text>
      {/*   <RNPickerSelect
        placeholder={placeholder}
        onValueChange={undefined}
        items={usuarios}
      /> */}
      <Calendar />
      <Text>Elije un horario disponible:</Text>
      <RNPickerSelect
        onValueChange={(value) => setProvider(value)}
        placeholder={placeholder}
        items={usuarios}
      />
      <View style={[globalStyles.button, globalStyles.normalButton]}>
        <Text onPress={showAlert} style={globalStyles.textButton}>
          + Guardar turno
        </Text>
       {/*  <Button title="Show alert" onPress={showAlert} /> */}
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text
            style={{
              backgroundColor: "red",
              height: 35,
              textAlign: "center",
              marginBottom: 5,
              marginTop: 5,
              alignItems: "center",
            }}
          >
            {item.name} {item.category}
          </Text>
        )}
      />
    </View>
  );
};

export default FilterBar;
