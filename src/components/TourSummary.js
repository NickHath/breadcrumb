import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TourSummary({ name, description }) {
  const navigation = useNavigation();

  return (
    <View>
      <Text>{ name }</Text>
      <Text>{ description }</Text>
      <Button title='View Tour' onPress={() => navigation.navigate('Tour', { name, description })} />
    </View>
  );
}