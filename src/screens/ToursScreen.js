import { Text, View, StyleSheet } from 'react-native';
import TourSummary from '../components/TourSummary';
import globalStyles from '../../styles/global';

const tourExamples = [
  {
    name: 'Downtown Tour',
    description: 'A tour of scenic downtown. Bring your family and explore the historic city of Cleveland, OH.',
  },
  {
    name: 'Museum Tour',
    description: 'Interactive art tour at the Metropolitan Museum of Art',
  }
]

export default function ToursScreen({ navigation }) {
  const tourJSX = tourExamples.map((tour, index) => <TourSummary key={index} name={tour.name} description={tour.description}/>)

  return (
    <View>
      <Text style={globalStyles.header}>Your Tours</Text>
      <View style={styles.tours}>
        { tourJSX }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tours: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});