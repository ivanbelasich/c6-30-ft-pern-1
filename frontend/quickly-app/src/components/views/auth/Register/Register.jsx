import React from 'react'
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';

const Register = () => {
  return (
    <View>
        <Text>Registro</Text>
        <Link to="/login">
          <Text>Ir a Login</Text>
      </Link>
    </View>
  )
}

export default Register