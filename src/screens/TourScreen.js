import { View, Text, Button, TextInput } from 'react-native';
import { useState, useRef, useEffect } from 'react';

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
        />
        <Button title='Delete Task' onPress={() => removeInput(i)}/>
      </View>
    )
  }

  return (
    <View>
      <Text>{name}</Text>
      <Text>{description}</Text>
      { inputsJSX }
      <Button title='Add Task' onPress={addInput}/>
    </View>
  );
}