import React from 'react';
import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';

import { styles } from './styles';
import { theme } from '../../globalStyles/theme';

export const CheckBox = ({ children, value, handleChange}) => {
  return (
    <>
        <View style={styles.container}>
            <Checkbox color={theme.colors.primary} type={'checkbox'} value={value} onValueChange={handleChange}/>
            <Text style={styles.text}>{children}</Text>
        </View>
    </>
  )
}
