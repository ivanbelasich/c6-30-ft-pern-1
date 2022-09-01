import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Alerts from "../Alerts/Alerts";
import axios from "axios";

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
    /* let [hours, minutes] = time.split(":"); */
    let date =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1 < 10
        ? "0" + (tempDate.getMonth() + 1)
        : tempDate.getMonth() + 1) +
      "-" +
      (tempDate.getDate() < 10 ? "0" + tempDate.getDate() : tempDate.getDate());
    /*  hours,
      minutes,
      0 */
    setText(date);
  };

  /* const fechaFinal = `${text}T${time}`;
  const stri = fechaFinal.toString()
  const fechit = new Date(stri) */

  useEffect(() => {
    axios.get(`${url}/api/service`).then((res) => {
      setData(res.data.payload);
    });
    axios.get(`${url}/api/provider`).then((res) => {
      setUsuarios(res.data.payload);
    });
  }, []);

  const categFiltered = data
    ?.map((el) => el.category)
    .filter((item, index) => {
      return data.map((el) => el.category).indexOf(item) === index;
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(`${url}/api/order`, {
        client: "Ivan",
        serviceId: provider,
        date: new Date(`${text}T${time}`.toString()),
      });
      console.log(resp.data, "Data de solicitud de turno");
      /*  console.log(date, "esto es la fecha final en el post"); */
    } catch (error) {
      console.log(error.resp, "Error al solicitar un turno");
    }
  };

  return (
    <View>
      {/*  <Text>FECHA FINAL: {fechaFinal}</Text> */}
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
                value={
                  el.Services.filter((d) => d.category.includes(category))[0].id
                }
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
        {
          data
            ?.filter((el) => el.id.includes(provider))
            .map((time, index) =>
              time.Date.monday.map((hour) => (
                <Picker.Item value={hour} label={hour} key={index} />
              ))
            )
          /*   .map((hora) => (
            <Picker.Time label={hora.Date.monday} value={hora.Date.monday} />
          )) */
        }
      </Picker>
      <Text>hora seleccionada: {time}</Text>
      {/* <Alerts /> */}
      <Button onPress={handleSubmit} title=" + Guardar turno" />
    </View>
  );
};

export default FilterBar;
