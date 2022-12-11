import { Text, View } from 'react-native';
import TourSummary from '../components/TourSummary';

const tourExamples = [
  {
    name: 'Downtown Tour',
    description: 'A tour of scenic downtown',
  },
  {
    name: 'Museum Tour',
    description: 'Interactive art tour',
  }
]

export default function ToursScreen({ navigation }) {
  const tourJSX = tourExamples.map((tour, index) => <TourSummary key={index} name={tour.name} description={tour.description}/>)

  return (
    <View>
      <Text>Your Tours</Text>
      { tourJSX }
    </View>
  );
}