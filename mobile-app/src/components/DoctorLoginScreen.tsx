import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type P = NativeStackScreenProps<RootStackParamList, 'DoctorLogin'>;

export default function DoctorLoginScreen({ navigation }: P) {
  const [pid, setPid] = useState('');

  const onSearch = async () => {
    // TODO: call patientContract.getPid() and compare to pid
    // if matches -> go to Doctor screen; else show message
    navigation.navigate('Doctor', { patientId: pid });
  };

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <TextInput
        placeholder="Enter Patient Metamask ID"
        value={pid}
        onChangeText={setPid}
        style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 12 }}
      />
      <Pressable onPress={onSearch} style={{ backgroundColor: 'green', padding: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Search</Text>
      </Pressable>
    </View>
  );
}
