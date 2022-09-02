import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
import globalStyles from "../../globalStyles/globalStyles";
import { styles } from "./styles";

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
    /*  let tempDate = new Date(selectedDate); */
    /* let [hours, minutes] = time.split(":"); */
    let date =
      selectedDate.getFullYear() +
      "-" +
      (selectedDate.getMonth() + 1 < 10
        ? "0" + (selectedDate.getMonth() + 1)
        : selectedDate.getMonth() + 1) +
      "-" +
      (selectedDate.getDate() < 10
        ? "0" + selectedDate.getDate()
        : selectedDate.getDate());
    /*  hours,
      minutes,
      0 */
    setText(date);
  };

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
        client: "Ivancho",
        serviceId: provider,
        date: `${text}T${time}`,
      });
      console.log(resp.data, "Data de solicitud de turno");
      /*  console.log(date, "esto es la fecha final en el post"); */
    } catch (error) {
      console.log(error.resp, "Error al solicitar un turno");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selecciona una categoría:</Text>
      <View style={styles.viewSelect}>
        <Picker
          style={styles.select}
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => setCategories(itemValue)}
        >
          <Picker.Item label={"Selecciona una categoría"} value={null} />
          {categFiltered?.map((el, index) => (
            <Picker.Item label={el} value={el} key={index} />
          ))}
        </Picker>
      </View>
      <Text style={styles.text}>Selecciona un profesional:</Text>
      <View style={styles.viewSelect}>
        <Picker
          style={styles.select}
          selectedValue={provider}
          onValueChange={(itemValue, itemIndex, label) =>
            setProvider(itemValue)
          }
        >
          <Picker.Item
            style={styles.viewSelect}
            label={"Selecciona un especialista"}
            value={undefined}
          />
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
                    el.Services.filter((d) => d.category.includes(category))[0]
                      .id
                  }
                />
              ))
          )}
        </Picker>
      </View>
      <Text style={styles.text}>Selecciona una fecha del calendario:</Text>
      <View style={styles.selectCalendar}>
        {text === "Empty" ? (
          <Text style={styles.textCalendar} onPress={() => showMode("date")}>
            Seleccionar fecha:
          </Text>
        ) : (
          <Text style={styles.textCalendar} onPress={() => showMode("date")}>
            {text}
          </Text>
        )}
      </View>
      {/*  <Text>fecha date: {date.toString()}</Text>
      <Text>fecha text: {text}</Text>
      <Text>
        lo que le llega al post: {text}T{time}
      </Text>
      <Text>fecha final: {finalData.toString()}</Text>
         <Text>hora seleccionada:{"0" + (Number(hora) + 2) + ":" + minuto}</Text>
      <Text>hora final: {time}</Text> */}
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
      <Text style={styles.text}>Selecciona un horario:</Text>
      <View style={styles.viewSelect}>
        <Picker
          style={styles.select}
          selectedValue={time}
          onValueChange={(itemValue) => setTime(itemValue)}
        >
          <Picker.Item label={"Selecciona un horario"} value={null} />
          {data
            ?.filter((el) => el.id.includes(provider))
            .map((time, index) =>
              time.Date.monday?.map((hour) => (
                <Picker.Item value={hour} label={hour} key={index} />
              ))
            )}
        </Picker>
      </View>
      <TouchableWithoutFeedback onPress={handleSubmit}>
        <View
          style={[
            globalStyles.button,
            globalStyles.normalButton,
            styles.appointmentButtonView,
          ]}
        >
          <Text style={[globalStyles.textButton, styles.appointmentButton]}>
            + Nuevo turno
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FilterBar;
