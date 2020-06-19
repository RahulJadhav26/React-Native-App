import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const goalInputHandler = (enteredText) => {
    setOutputText(enteredText)
  }
  const addGoalHandler = () =>{
    setCourseGoals(currentGoals =>[
      ...courseGoals,
      {id: Math.random().toString() , value:outputText }
    ])
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
        onChangeText={goalInputHandler}
        value={outputText}></TextInput>
        <Button title='submit' onPress={addGoalHandler}></Button>
       
      </View>
      <FlatList 
      keyExtractor={(item,index) => item.id}
      data={courseGoals}
      renderItem={itemData =>(
          <View style={styles.listItems}>
             <Text >{itemData.item.value}</Text> 
          </View>
        )}
      />
         
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    width: '70%' ,
    borderColor:"black",
    borderWidth: 1,
    padding:10
  },
  listItems:{
    padding:10,
    marginVertical:10,
    backgroundColor:"#ccc",
    borderColor:'black',
    borderWidth:1
  }
});
