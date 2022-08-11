// example Login viewconst HomeUser = () => {

import { useState } from "react";
import { TextInput, TouchableHighlight, View, Text } from "react-native";
import style from "./style";
export default function Login() {
    let [user, setUser] = useState('')
    let [password, setPassword] = useState('')
    let [response, setResponse] = useState(["Server response."])

    async function login(user, password) {
        let response = await fetch('https://quickly-b.herokuapp.com/login', {
            method: "POST",
            body: JSON.stringify({
                user,
                password
            })
        })
        let data = await response.json()
        let toText = Object.keys(data).map(k => `${k}: ${data[k]}`)
        setResponse(toText)
    }
    async function register(user, password) {
        let response = await fetch('https://quickly-b.herokuapp.com/register', {
            method: "POST",
            body: JSON.stringify({
                user,
                password
            })
        })
        let data = await response.json()
        let toText = Object.keys(data).map(k => `${k}: ${data[k]}`)
        setResponse(toText)
    }
    function handlePressLogin() {
        login(user, password)
    }
    function handlePressRegister() {
        register(user, password)
    }
    
    return (
        <View style={style.container}>
            <TextInput value={user} onChange={e => setUser(e.target.value)} style={style.input}/>
            <TextInput value={password} onChange={e => setPassword(e.target.value)} style={style.input}/>
            <View>
                <TouchableHighlight onPress={handlePressLogin}>
                    <Text>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={handlePressRegister}>
                    <Text>Register</Text>
                </TouchableHighlight>
            </View>
            <View>
                {response.map((k, index) => <Text key={`serverResponse${index}`}>{k}</Text>)}
            </View>
        </View>
    );
}
