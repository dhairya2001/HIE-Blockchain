import { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
// import { getPatientData, setRecentDiagnosis } from '../web3/patientService';

type P = NativeStackScreenProps<RootStackParamList, 'Doctor'>;

export default function DoctorScreen({ route }: P) {
  const patientId = route.params?.patientId;
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [prev, setPrev] = useState('');
  const [recent, setRecent] = useState('');
  const [newRecent, setNewRecent] = useState('');

  useEffect(() => {
    (async () => {
      // const data = await getPatientData();
      // setName(data.name); setDob(data.dob); setContact(data.contact);
      // setEmail(data.email); setPrev(data.prevDia); setRecent(data.recentDia);
    })();
  }, []);

  const onUpdate = async () => {
    if (!newRecent.trim()) return;
    // await setRecentDiagnosis(newRecent);
    setRecent(newRecent);
    setNewRecent('');
    Alert.alert('Updated', 'Recent diagnosis updated.');
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <TextInput placeholder="Recent Diagnosis (with date mm-dd-yyyy)" value={newRecent} onChangeText={setNewRecent}
        style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 12 }}/>
      <Pressable onPress={onUpdate} style={{ backgroundColor: 'green', padding: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Update</Text>
      </Pressable>

      <InfoRow label="Name" value={name}/>
      <InfoRow label="DOB" value={dob}/>
      <InfoRow label="Contact" value={contact}/>
      <InfoRow label="Email" value={email}/>
      <InfoRow label="Recent Diagnosis" value={recent}/>
      <InfoRow label="Previous Diagnosis" value={prev}/>
    </ScrollView>
  );
}

function InfoRow({ label, value }: { label: string; value: string; }) {
  return (
    <View>
      <Text style={{ fontSize: 18 }}>{label} - <Text style={{ color: 'green', fontWeight: '600' }}>{value || '—'}</Text></Text>
      <View style={{ height: 1, backgroundColor: '#eee', marginVertical: 10 }} />
    </View>
  );
}
