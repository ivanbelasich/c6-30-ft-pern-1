import { Image, ScrollView, Text, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
// Hooks
import { useAuth } from '../../../../hooks/useAuth';
// Styles
import globalStyles from '../../../../globalStyles/globalStyles';
import { styles } from './styles';

const ProfileSupplier = () => {

  const { authData } = useAuth();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.dataContainer}>
          <View style={styles.imgContainer}>
            <Image source={require('../../../../../assets/profile-photo.png')} style={styles.imgLogo}/>
          </View>
          <Text style={[globalStyles.title2, styles.title]}>{authData.user}</Text>
          <Text style={[globalStyles.title2, styles.subtitle]}>{authData.access === "provider" ? "Proveedor" : "Cliente"}</Text>
        </View>
        <View style={styles.menu}>
          <View style={styles.label}>
            <Ionicons name="ios-person" color="#225566" size={30}/>
            <Text style={styles.labelText}>Información personal</Text>
          </View>
          <View style={styles.label}>
            <Ionicons name="ios-notifications" color="#225566" size={30}/>
            <Text style={styles.labelText}>Notificaciones</Text>
          </View>
          <View style={styles.label}>
            <Ionicons name="ios-lock-closed" color="#225566" size={30}/>
            <Text style={styles.labelText}>Seguridad</Text>
          </View>
          <View style={styles.label}>
            <Ionicons name="ios-help-circle-outline" color="#225566" size={30}/>
            <Text style={styles.labelText}>Ayuda</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default ProfileSupplier