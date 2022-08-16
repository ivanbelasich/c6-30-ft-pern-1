import { useState } from "react";
import {
  TextInput,
  TouchableHighlight,
  View,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { Link, useNavigate } from "react-router-native";

import style from "./style";

import { useAuth } from "../../../../hooks/useAuth";

const Login = () => {
  return (
    <ImageBackground
      source={require("../../../../../assets/templates/TemplateLogin.png")}
      resizeMode="cover"
      style={style.image}
    >
      <View style={style.container}>
        <Image
          source={require("../../../../../assets/logo-quickly.png")}
          style={style.logo}
          resizeMode="center"
        />
        <View>
          <Text style={style.inputContainer}>Ingresa tu usuario</Text>
          <TextInput
            style={style.input}
            value={"User"}
            placeholder="Ingresa tu usuario"
            autoFocus={false}
          />
        </View>
        <View>
          <Text style={style.inputContainer}>Ingresa tu contraseña</Text>
          <TextInput
            value={"User"}
            placeholder="Ingresa tu contraseña"
            style={style.input}
          />
        </View>
        <View style={style.direction}>
          <Text>Recordame</Text>
          <Text>¿Olvidaste tu contraseña?</Text>
        </View>
        <TouchableHighlight style={style.button}>
          <Text>Ingresar</Text>
        </TouchableHighlight>
        <Text>-----------------°-------------</Text>
        <View style={style.direction}>
          <Text>¿Aun no tienes cuenta?</Text>
          <Text>¡Sumate!</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

// export default function Login() {
//     let [user, setUser] = useState('Username')
//     let [password, setPassword] = useState('Password')
//     let [response, setResponse] = useState(["Server response."])

//     const navigate = useNavigate();

//     const auth = useAuth();

//     async function login(user, password) {
//         let headers = new Headers()
//         headers.append("Content-Type", "application/json")
//         try {
//             let response = await fetch('https://quickly-b.herokuapp.com/login', {
//                 headers,
//                 method: "POST",
//                 body: JSON.stringify({
//                     user,
//                     password
//                 })
//             })
//             let data = await response.json()
//             let toText = Object.keys(data).map(k => `${k}: ${data[k]}`)
//             setResponse(toText)
//             auth.signIn();
//             navigate("/", {replace: true});
//         }
//         catch (error) {
//             console.log('error', error)
//         }

//     }
//     async function register(user, password) {
//         try {
//             let headers = new Headers()
//             headers.append("Content-Type", "application/json")
//             let response = await fetch('https://quickly-b.herokuapp.com/register', {
//                 headers,
//                 method: "POST",
//                 body: JSON.stringify({
//                     user,
//                     password
//                 })
//             })
//             let data = await response.json()
//             let toText = Object.keys(data).map(k => `${k}: ${data[k]}`)
//             setResponse(toText)
//         }
//         catch (error) {
//             console.log('error', error)
//         }
//     }
//     function handlePressLogin() {
//         login(user, password)
//     }
//     function handlePressRegister() {
//         register(user, password)
//     }

//     return (
//         <View style={style.container}>
//             <Text style={style.title}>Login/Register view</Text>
//             <TextInput value={user} onChange={e => setUser(e.target.value)} style={style.input} />
//             <TextInput value={password} onChange={e => setPassword(e.target.value)} style={style.input} />
//             <View style={style.buttonContainer}>
//                 <TouchableHighlight onPress={handlePressLogin} style={style.button}>
//                     <Text style={style.buttonText}>Login</Text>
//                 </TouchableHighlight>
//                 <TouchableHighlight onPress={handlePressRegister} style={style.button}>
//                     <Text style={style.buttonText}>Register</Text>
//                 </TouchableHighlight>
//             </View>
//             <View>
//                 {response.map((k, index) => <Text key={`serverResponse${index}`}>{k}</Text>)}
//             </View>
//             <View>
//                 <Text>¿Aún no tienes una cuenta?</Text>
//                 <Link to="/register">
//                     <Text>¡Súmate!</Text>
//                 </Link>
//             </View>
//         </View>
//     );
// }
