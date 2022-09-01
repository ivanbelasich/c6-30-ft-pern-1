import { Text, View } from 'react-native';
// Styles
import globalStyles from '../../globalStyles/globalStyles';
import { styles } from './styles';

export const CardOrder = ({data}) => {

  return (
    <View style={[globalStyles.cardOutlineContainer, styles.cardContainer]}>
        <View style={styles.dataContainer}>
          <View style={styles.circle}>
          </View>
          <View style={styles.textContainer}>
            <Text>Nombre de cliente: {data.client}</Text>
            <Text>Fecha: {data.date}</Text>
            <Text>Estado: {data.status === 'pending' && "Pendiente"}</Text>
          </View>
        </View>
    </View>
  )
};