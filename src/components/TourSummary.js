import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../styles/global';

export default function TourSummary({ name, description }) {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.card}>
      <View style={styles.tourTitle}>
        <Text style={globalStyles.subHeader}>{ name }</Text>
      </View>
      <Text style={globalStyles.text}>{ description }</Text>
      <Pressable style={globalStyles.confirmButton} onPress={() => navigation.navigate('Tour', { name, description })}>
        <Text style={globalStyles.buttonText}>View Tour</Text>
      </Pressable>
    </View>
  );
}



const styles = StyleSheet.create({
  tourTitle: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, .1)' ,
    borderStyle: 'solid',
  }  
});