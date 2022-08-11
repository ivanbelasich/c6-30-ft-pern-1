import React, { useState } from "react";

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

  return (
    <View>
      <RNPickerSelect
        onValueChange={(value) => setCategories(value)}
        items={categories}
      />
    </View>
  );
};

export default FilterBar;
