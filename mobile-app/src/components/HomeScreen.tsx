import { View, Text, ScrollView } from 'react-native';
import Card from './Card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type P = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: P) {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ backgroundColor: '#111', padding: 24, borderRadius: 16, marginBottom: 16 }}>
        <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700', textAlign: 'center' }}>
          Healthcare Information Exchange Using Blockchain
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Card title="Patient" image={require('../../assets/People-Patient-Male-icon.png')}
          onPress={() => navigation.navigate('Patient')} />
        <Card title="Doctor" image={require('../../assets/images.jpeg')}
          onPress={() => navigation.navigate('DoctorLogin')} />
        <Card title="Admin" image={require('../../assets/admin.jpeg')}
          onPress={() => navigation.navigate('Admin')} />
      </View>
    </ScrollView>
  );
}
