import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native';
import { Link } from "react-router-native";


import { theme } from '../../globalStyles/theme';
import { styles } from './styles';

export const HeaderBar = ({title}) => {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.secondary} />
      <View style={styles.container}>
        {
          title !== "Home" && <Link to="/"><Image source={require('../../../assets/back-icon.png')}></Image></Link>
        }
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
};