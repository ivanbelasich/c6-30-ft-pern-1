import React, { useEffect, useState } from "react";
import { View, Text, Alert, Button } from "react-native";
import axios from "axios";
import globalStyles from "../../globalStyles/globalStyles";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const url = "https://quickly-a.herokuapp.com";

const FilterBar = () => {
  const [category, setCategories] = useState("");
  const [provider, setProvider] = useState();
  const [usuarios, setUsuarios] = useState();
  const [data, setData] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("Empty");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  /*   const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() + 
      "-0" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    setText(fDate);
    console.log(
      new Date(text.concat("T" + time + ":00")).toString(),
      "esta es la fecha"
    );
  }; */
  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let min2 = (num) => {
      if (num < 10) return "0" + num;
      else return String(num);
    };
    let tempDate = new Date(selectedDate);
    let fDate =
      tempDate.getFullYear() +
      "-" +
      min2(tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    setText(new Date(fDate.concat("T" + time + ":00")).toString());

    console.log(
      new Date(fDate.concat("T" + time + ":00")).toString(),
      "esta es la fecha"
    );
  };

  useEffect(() => {
    axios.get(`${url}/api/service`).then((res) => {
      setData(res.data.payload.map((el) => el.category));
    });
  }, []);

  useEffect(() => {
    axios.get(`${url}/api/provider`).then((res) => {
      setUsuarios(res.data.payload);
    });
  }, []);

  const categFiltered = data?.filter((item, index) => {
    return data.indexOf(item) === index;
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(`${url}/api/order`, {
        client: "Ivan",
        serviceId: provider,
        date: text,
      });
      console.log(resp.data, "esta es la datita");
    } catch (error) {
      console.log(error.resp, "este es el error");
    }
  };

  return (
    <View>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue, itemIndex) => setCategories(itemValue)}
      >
        <Picker.Item label={"Selecciona una categoría"} value={null} />
        {categFiltered?.map((el, index) => (
          <Picker.Item label={el} value={el} key={index} />
        ))}
      </Picker>
      <Text>{category}</Text>
      <Picker
        selectedValue={provider}
        onValueChange={(itemValue, itemIndex, label) => setProvider(itemValue)}
      >
        <Picker.Item label={"Selecciona un especialista"} value={undefined} />
        {!category ? (
          <Picker.Item label={""} value={null} enabled={false} />
        ) : (
          usuarios
            ?.filter((el) =>
              el.Services.map((a) => a.category).includes(category)
            )
            .map((el, index) => (
              <Picker.Item
                label={el.user}
                key={index}
                value={el.Services[0].id}
              />
            ))
        )}
      </Picker>
      <Text> id de proveedor: {provider}</Text>
      <Button title="Seleccionar fecha" onPress={() => showMode("date")} />
      <Text>Fecha elegida: {text}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          mode={mode}
          is24Hour
          display="default"
          minimumDate={new Date(Date())}
          value={date}
          onChange={onChange}
        />
      )}
      <Picker
        selectedValue={time}
        onValueChange={(itemValue) => setTime(itemValue)}
      >
        <Picker.Item label={"Selecciona un horario"} value={null} />
        <Picker.Item label={"08:30"} value={"08:30"} />
        <Picker.Item label={"09:30"} value={"09:30"} />
        <Picker.Item label={"10:30"} value={"10:30"} />
      </Picker>
      <Text>Hora seleccionada: {time}</Text>
      <Text>{text.concat("T" + time + ":00")}</Text>
      <View style={[globalStyles.button, globalStyles.normalButton]}>
        <Text onPress={showAlert} style={globalStyles.textButton}>
          + Guardar turno
        </Text>
      </View>
      <Button onPress={handleSubmit} title="guarda pa" />
    </View>
  );
};

export default FilterBar;
