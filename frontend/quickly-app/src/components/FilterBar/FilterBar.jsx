import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const categories = [
  { key: 1, label: "Dermatología", value: "Dermatología" },
  { key: 2, label: "Peluquería", value: "Peluquería" },
  { key: 3, label: "Traumatología", value: "Traumatología" },
];

const usuarios = [
  {
    name: "Jorge",
    category: "Dermatología",
  },
  {
    name: "Raul",
    category: "Peluquería",
  },
  {
    name: "Luz",
    category: "Traumatología",
  },
  {
    name: "Martina",
    category: "Peluquería",
  },
];

const FilterBar = () => {
  const [category, setCategories] = useState("");
  const [data, setData] = useState([]);

  function filter() {
    const dataFiltered = usuarios.filter((el) =>
      el.category.includes(category)
    );
    setData(dataFiltered);
  }

  return (
    <View>
      <Text>Selecciona una especialidad:</Text>
      <RNPickerSelect
        onValueChange={(value) => setCategories(value)}
        items={categories}
      />
      <Button onPress={filter} title={"buscar"} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text>
            {item.name} {item.category}
          </Text>
        )}
      />
    </View>
  );
};

export default FilterBar;
