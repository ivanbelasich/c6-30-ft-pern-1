import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform, View, Button, Text } from "react-native";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || date; 
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
      <Button title="date picker" onPress={() => showMode("date")} />
      <Text>{text}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Calendar;
