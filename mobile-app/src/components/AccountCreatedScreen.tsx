import { View, Text } from 'react-native';
export default function AccountCreatedScreen() {
  return (
    <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
      <Text style={{ color: 'green', fontSize: 24, fontWeight: '800' }}>Account Created</Text>
    </View>
  );
}
