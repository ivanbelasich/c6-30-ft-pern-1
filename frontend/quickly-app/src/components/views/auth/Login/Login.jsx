import { useState } from "react";
import { TextInput, TouchableHighlight, View, Text, StatusBar } from "react-native";

import { theme } from "../../../../globalStyles/theme";
import style from "./style";

import { useAuth } from "../../../../hooks/useAuth";

export default function Login({ navigation }) {

    let [user, setUser] = useState('Username')
    let [password, setPassword] = useState('Password')

    const auth = useAuth();

    console.log(auth);

    function handlePressLogin() {
        auth.signIn();
    }
    function handlePressRegister() {
        navigation.navigate('Register');
    }

    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary}/>
            <Text style={style.title}>Login/Register view</Text>
            <TextInput value={user} onChange={e => setUser(e.target.value)} style={style.input} />
            <TextInput value={password} onChange={e => setPassword(e.target.value)} style={style.input} />
            <View style={style.buttonContainer}>
                <TouchableHighlight onPress={handlePressLogin} style={style.button}>
                    <Text style={style.buttonText}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={handlePressRegister} style={style.button}>
                    <Text style={style.buttonText}>Register</Text>
                </TouchableHighlight>
            </View>
            <View>
                <Text>¿Aún no tienes una cuenta?</Text>
            </View>
        </View>
    );
}
