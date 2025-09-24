import { Image, Pressable, Text, View } from 'react-native';

export default function Card({
  title,
  image,
  onPress,
}: {
  title: string;
  image: any; // require('...')
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={{ width: '48%' }}>
      <View style={{
        borderRadius: 16, overflow: 'hidden', backgroundColor: '#fff',
        shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8, elevation: 3, marginBottom: 16
      }}>
        <Image source={image} style={{ width: '100%', height: 110 }} resizeMode="cover" />
        <View style={{ padding: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', textAlign: 'center' }}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
}
