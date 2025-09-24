import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function PatientScreen() {
  const [pid, setPid] = useState(''); const [email, setEmail] = useState('');
  const [name, setName] = useState(''); const [dob, setDob] = useState('');
  const [phone, setPhone] = useState(''); const [diagnosis, setDiagnosis] = useState<{sn:number; diag:string; doctor:string; rx:string}[]>([]);

  useEffect(() => {
    // TODO: load from contract; for now, show placeholder
    setDiagnosis([{ sn: 1, diag: '—', doctor: '—', rx: '—' }]);
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 }}>
        <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 8 }}>My account</Text>
        <Field label="Patient ID" value={pid}/>
        <Field label="Email" value={email}/>
        <Field label="Name" value={name}/>
        <Field label="DOB" value={dob}/>
        <Field label="Phone Number" value={phone}/>
      </View>

      <View>
        <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 8 }}>Diagnosis</Text>
        {diagnosis.map(row => (
          <View key={row.sn} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderColor: '#eee' }}>
            <Text>{row.sn}</Text><Text>{row.diag}</Text><Text>{row.doctor}</Text><Text>{row.rx}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function Field({ label, value }: { label: string; value: string; }) {
  return (
    <View style={{ marginBottom: 8 }}>
      <Text style={{ opacity: 0.6, marginBottom: 4 }}>{label}</Text>
      <Text style={{ fontSize: 16 }}>{value || '—'}</Text>
    </View>
  );
}
