import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Welcome')
  return (
    <View style={{padding: 50 }}>
      <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
        <TextInput 
        placeholder='Course Goal'
        style={{width: '70%' , borderColor:"black" , borderWidth: 1, padding:10}}
        ></TextInput>
        <Button title='submit'></Button>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
