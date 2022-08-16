import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

// Styles
import { styles } from './styles';

export const RadioButtonGroup = ({handleChange, value}) => {
  return (
    <View>
        <RadioButton.Group onValueChange={handleChange} value={value}>
            <Text>Duración de turno: </Text>
            <View style={styles.container}>
                <View style={styles.label}>
                    <Text>15 min</Text>
                    <RadioButton value="15" />
                </View>
                <View style={styles.label}>
                    <Text>20 min</Text>
                    <RadioButton value="20" />
                </View>
                <View style={styles.label}>
                    <Text>30 min</Text>
                    <RadioButton value="30" />
                </View>
                <View style={styles.label}>
                    <Text>1 hora</Text>
                    <RadioButton value="60" />
                </View>
                <View style={styles.label}>
                    <Text>2 hora</Text>
                    <RadioButton value="120" />
                </View>        
            </View>
        </RadioButton.Group>
    </View>
  )
}