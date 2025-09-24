import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { StyleSheet } from 'react-native';

const s = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
  },
  btn: {
    backgroundColor: 'green',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 6,
  },
});

type P = NativeStackScreenProps<RootStackParamList, 'CreateDoctor'>;

export default function CreateDoctorScreen({ navigation }: P) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [did, setDid] = useState('');
  const [special, setSpecial] = useState('');
  const [contact, setContact] = useState('');

  const onSubmit = async () => {
    // TODO: call doctor contract giveName/giveEmail/giveDid/giveSpecialization/giveContact
    navigation.replace('AccountCreated');
  };

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>Register</Text>
      <Text style={{ opacity: 0.6 }}>Create Doctor Account</Text>

      <TextInput placeholder="Name" value={name} onChangeText={setName} style={s.input}/>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={s.input} keyboardType="email-address"/>
      <TextInput placeholder="Metamask ID" value={did} onChangeText={setDid} style={s.input}/>
      <TextInput placeholder="Specialization" value={special} onChangeText={setSpecial} style={s.input}/>
      <TextInput placeholder="Contact Number" value={contact} onChangeText={setContact} style={s.input} keyboardType="phone-pad"/>

      <Pressable onPress={onSubmit} style={s.btn}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Create Doctor</Text>
      </Pressable>
    </View>
  );
}
