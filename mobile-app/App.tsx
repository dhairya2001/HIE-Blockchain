import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import AdminScreen from './src/components/AdminScreen';
import CreatePatientScreen from './src/components/CreatePatientScreen';
import CreateDoctorScreen from './src/components/CreateDoctorScreen';
import AccountCreatedScreen from './src/components/AccountCreatedScreen';
import DoctorLoginScreen from './src/components/DoctorLoginScreen';
import DoctorScreen from './src/components/DoctorScreen';
import PatientScreen from './src/components/PatientScreen';

export type RootStackParamList = {
  Home: undefined;
  Admin: undefined;
  CreatePatient: undefined;
  CreateDoctor: undefined;
  AccountCreated: undefined;
  DoctorLogin: undefined;
  Doctor: { patientId?: string };
  Patient: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitle: 'HIE using Blockchain' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="CreatePatient" component={CreatePatientScreen} options={{ title: 'Create Patient ID' }}/>
        <Stack.Screen name="CreateDoctor" component={CreateDoctorScreen} options={{ title: 'Create Doctor ID' }}/>
        <Stack.Screen name="AccountCreated" component={AccountCreatedScreen} options={{ title: 'Success' }}/>
        <Stack.Screen name="DoctorLogin" component={DoctorLoginScreen} options={{ title: 'Find Patient' }}/>
        <Stack.Screen name="Doctor" component={DoctorScreen} options={{ title: 'Doctor Panel' }}/>
        <Stack.Screen name="Patient" component={PatientScreen} options={{ title: 'Patient' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
