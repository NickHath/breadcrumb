import { View, ScrollView, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import globalStyles from '../../styles/global';

export default function TourScreen({ route }) {
  const { name, description } = route.params;
  const [textValue, setTextValue] = useState(''); 
  const [numInputs, setNumInputs] = useState(1);
  const refInputs = useRef([textValue]);

  useEffect(() => {
    console.log('resetting')
    setTextValue('');
    setNumInputs(1);
    refInputs.current = [];
  }, []);

  console.log(refInputs.current);
  console.log(numInputs);

  function setInputValue(index, value) {
    const inputs = refInputs.current;
    inputs[index] = value;
    setTextValue(value);
  }

  function addInput() {
    refInputs.current.push('');
    setNumInputs(value => value + 1);
  }

  function removeInput(i) {
    refInputs.current.splice(i, 1)[0];
    setNumInputs(value => value - 1);
  }

  const inputsJSX = [];
  for (let i = 0; i < numInputs; i++) {
    inputsJSX.push(
      <View>
        <TextInput 
          onChangeText={value => setInputValue(i, value)}
          value={refInputs.current[i]}
          placeholder='Enter text here...'
          style={globalStyles.input}
        />
        <Pressable style={globalStyles.deleteButton} onPress={() => removeInput(i)}>
          <Text style={globalStyles.buttonText}>Delete Task</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={globalStyles.header}>{name}</Text>
      <Text style={globalStyles.text}>{description}</Text>
      { inputsJSX }
      <Pressable style={globalStyles.confirmButton} onPress={addInput}>
        <Text style={globalStyles.buttonText}>Add Task</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  }
});