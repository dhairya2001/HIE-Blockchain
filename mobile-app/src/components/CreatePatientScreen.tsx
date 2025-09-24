import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type P = NativeStackScreenProps<RootStackParamList, 'CreatePatient'>;

const s = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700' },
  subtitle: { opacity: 0.6, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
  },
  btn: {
    backgroundColor: 'green',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 14,
  },
  btnText: { color: '#fff', fontWeight: '700' },
});

export default function CreatePatientScreen({ navigation }: P) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');     // mm/dd/yyyy
  const [pid, setPid] = useState('');     // metamask id
  const [contact, setContact] = useState('');

  const onSubmit = async () => {
    navigation.replace('AccountCreated');
  };

  return (
    <View style={s.container}>
      <Text style={s.title}>Register</Text>
      <Text style={s.subtitle}>Create Patient Account</Text>

      <TextInput placeholder="Name" value={name} onChangeText={setName} style={s.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={s.input} keyboardType="email-address" />
      <TextInput placeholder="DOB (mm/dd/yyyy)" value={dob} onChangeText={setDob} style={s.input} />
      <TextInput placeholder="Metamask ID" value={pid} onChangeText={setPid} style={s.input} />
      <TextInput placeholder="Contact Number" value={contact} onChangeText={setContact} style={s.input} keyboardType="phone-pad" />

      <Pressable onPress={onSubmit} style={s.btn}>
        <Text style={s.btnText}>Create Patient</Text>
      </Pressable>
    </View>
  );
}
