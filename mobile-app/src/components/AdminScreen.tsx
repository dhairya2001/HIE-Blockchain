import { View, Text } from 'react-native';
import Card from './Card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type P = NativeStackScreenProps<RootStackParamList, 'Admin'>;

export default function AdminScreen({ navigation }: P) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 16 }}>Admin</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Card title="Create Patient ID" image={require('../../assets/People-Patient-Male-icon.png')}
          onPress={() => navigation.navigate('CreatePatient')} />
        <Card title="Create Doctor ID" image={require('../../assets/images.jpeg')}
          onPress={() => navigation.navigate('CreateDoctor')} />
      </View>
    </View>
  );
}
