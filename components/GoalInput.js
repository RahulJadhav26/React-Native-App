import React,{useState} from 'react'
import {View,Text,TextInput, Button,StyleSheet} from 'react-native'

const GoalInput = props => {
    const [outputText, setOutputText] = useState('')
    const goalInputHandler = (enteredText) => {
        setOutputText(enteredText)
      }
    return (
    <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
        onChangeText={goalInputHandler}
        value={outputText}></TextInput>
        <Button title='submit' onPress={() => props.onAddGoal(outputText)}></Button>
       
    </View>
    )
}

const styles = StyleSheet.create({
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
})

export default GoalInput