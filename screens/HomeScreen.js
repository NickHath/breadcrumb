import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')}></Button>
    </View>
  );
}

