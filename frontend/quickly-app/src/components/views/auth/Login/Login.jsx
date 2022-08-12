import { useState } from "react";
import { TextInput, TouchableHighlight, View, Text } from "react-native";
import { useNavigate } from "react-router-native";

import style from "./style";

import { useAuth } from "../../../../hooks/useAuth";

export default function Login() {
    let [user, setUser] = useState('Username')
    let [password, setPassword] = useState('Password')
    let [response, setResponse] = useState(["Server response."])

    const navigate = useNavigate();

    const auth = useAuth();

    async function login(user, password) {
        let headers = new Headers()
        headers.append("Content-Type", "application/json")
        try {
            let response = await fetch('https://quickly-b.herokuapp.com/login', {
                headers,
                method: "POST",
                body: JSON.stringify({
                    user,
                    password
                })
            })
            let data = await response.json()
            let toText = Object.keys(data).map(k => `${k}: ${data[k]}`)
            setResponse(toText)
            auth.signIn();
            navigate("/", {replace: true});
        }
        catch (error) {
            console.log('error', error)
        }

    }
    async function register(user, password) {
        try {
            let headers = new Headers()
            headers.append("Content-Type", "application/json")
            let response = await fetch('https://quickly-b.herokuapp.com/register', {
                headers,
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
        catch (error) {
            console.log('error', error)
        }
    }
    function handlePressLogin() {
        login(user, password)
    }
    function handlePressRegister() {
        register(user, password)
    }

    return (
        <View style={style.container}>
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
                {response.map((k, index) => <Text key={`serverResponse${index}`}>{k}</Text>)}
            </View>
        </View>
    );
}
