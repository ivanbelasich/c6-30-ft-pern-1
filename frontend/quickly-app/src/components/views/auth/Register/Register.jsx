import React from 'react'
import { ScrollView, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { HeaderBar } from '../../../HeaderBar/HeaderBar';

const Register = () => {
  return (
    <ScrollView>
      <HeaderBar title="Registro"/>
      <View>
          <Text>Registro</Text>
      </View>
    </ScrollView>
  )
}

export default Register