import { Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '../../globalStyles/globalStyles';
import { styles } from './styles';

export const CardService = ({data, handleDelete}) => {

  return (
    <View style={styles.container}>
        <View style={styles.dataContainer}>
            <Text>Nombre: {data?.name}</Text>
            <Text>Precio: {data?.value}</Text>
            <Text>Descripción: {data?.description}</Text>
            <View>
                <Text>Horarios:</Text>
                <View style={styles.textContainer}>
                    {
                        data?.Date.monday.map(time => (
                            <Text key={time} style={styles.text}>{time}</Text>
                        ))
                    }
                </View>
                <View>
                    <Text>Días disponibles:</Text>
                    <View style={styles.textContainer}>
                        {data?.Date.monday && (<Text style={styles.text}>Lunes</Text>)}
                        {data?.Date.tuesday && (<Text style={styles.text}>Martes</Text>)}
                        {data?.Date.wednesday && (<Text style={styles.text}>Miércoles</Text>)}
                        {data?.Date.thursday && (<Text style={styles.text}>Jueves</Text>)}
                        {data?.Date.friday && (<Text style={styles.text}>Viernes</Text>)}
                        {data?.Date.saturday && (<Text style={styles.text}>Sábado</Text>)}
                        {data?.Date.sunday && (<Text style={styles.text}>Domingo</Text>)}
                    </View>
                </View>
            </View>
        </View>
        <Pressable onPress={() => handleDelete(data.id)}>
            <View style={[globalStyles.button, globalStyles.cancelButton]}>
                <Icon name="ios-trash" size={30} color="#FFF"/>
            </View>
        </Pressable>
    </View>
  )
};