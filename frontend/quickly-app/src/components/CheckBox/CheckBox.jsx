import React from 'react';
import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';

export const CheckBox = ({ children, value, handleChange}) => {
  return (
    <>
        <View>
            <Checkbox type={'checkbox'} value={value} onValueChange={handleChange}/>
            <Text>{children}</Text>
        </View>
    </>
  )
}
