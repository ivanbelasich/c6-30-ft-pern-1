import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";
import globalStyles from "../../globalStyles/globalStyles";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Alerts from "../Alerts/Alerts";

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

  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(selectedDate);
    let [hours, minutes] = time.split(":");
    let date = new Date(
      tempDate.getFullYear(),
      tempDate.getMonth(),
      tempDate.getDate(),
      hours,
      minutes,
      0
    );
    let finalText = date.toString();
    setText(finalText);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(`${url}/api/order`, {
        client: "Ivan",
        serviceId: provider,
        date: text,
      });
      console.log(resp.data, "Data de solicitud de turno");
    } catch (error) {
      console.log(error.resp, "Error al solicitar un turno");
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
                value={el.Services.filter(d => d.category.includes(category))[0].id}
              />
            ))
        )}
      </Picker>
      <Text>id: {provider}</Text>
      <Button title="Seleccionar fecha" onPress={() => showMode("date")} />
      <Text>Fecha seleccionada: {text}</Text>
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
        <Picker.Item label={"07:30"} value={"07:30"} />
        <Picker.Item label={"09:30"} value={"09:30"} />
        <Picker.Item label={"12:30"} value={"12:30"} />
      </Picker>
      <Text>hora seleccionada: {time}</Text>
      <Alerts />
      <Button onPress={handleSubmit} title="guarda pa" />
    </View>
  );
};

export default FilterBar;
