import { useState } from "react";
import { TextInput, TouchableHighlight, View, Text, StatusBar, ImageBackground, Image } from "react-native";
import { useAuth } from "../../../../hooks/useAuth";

import { CheckBox } from "../../../CheckBox/CheckBox";

import { theme } from "../../../../globalStyles/theme";
import style from "./style";
import globalStyles from "../../../../globalStyles/globalStyles";

export const Login = ({ navigation }) => {

  let [user, setUser] = useState("Username");
  let [password, setPassword] = useState("Password");

  const auth = useAuth();

    console.log(auth);

  function handleLogin() {
    auth.signIn();
  }

  function handleRegister() {
    navigation.navigate('Register');
  }

  const Marked = () => {
    console.log("Esta marcado");
  };

  return (
    <ImageBackground
      source={require("../../../../../assets/templates/TemplateLogin.png")}
      resizeMode="cover"
      style={style.image}
    >
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary}/>
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
            value={user}
            placeholder="Ingresa tu usuario"
            autoFocus={false}
          />
        </View>
        <View>
          <Text style={style.inputContainer}>Ingresa tu contraseña</Text>
          <TextInput
            value={password}
            placeholder="Ingresa tu contraseña"
            style={style.input}
          />
        </View>
        <View style={style.marginY}>
          <View style={style.direction}>
            <CheckBox children={"Recordame"} handleChange={Marked} />
            <Text style={style.textRecuperatePassword}>
              ¿Olvidaste tu contraseña?
            </Text>
          </View>
        </View>
        <View style={style.marginX}>
          <View style={globalStyles.disabledButton}>
            <TouchableHighlight
              onPress={handleLogin}
              style={globalStyles.button}
            >
              <Text style={globalStyles.textButton}>Ingresar</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={style.marginX}>
          <View style={{}}>
            <View style={style.line}>
              <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
              <View>
                <Text style={{ width: 30, textAlign: "center" }}>O</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            </View>
          </View>
        </View>
        <View style={style.direction}>
          <Text>¿Aún no tienes cuenta?</Text>
          <TouchableHighlight onPress={handleRegister}>
            <Text style={style.textRegister}>Súmate!</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

// export default function Login() {
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
