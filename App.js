import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import Goalnput from './components/GoalInput'
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const addGoalHandler = (goalTitle) =>{
    setCourseGoals(currentGoals =>[
      ...courseGoals,
      {id: Math.random().toString() , value: goalTitle }
    ])
  }
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal)=> goalId !== goalId)
    })
  }
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal = {addGoalHandler}/>
      <FlatList 
      keyExtractor={(item,index) => item.id}
      data={courseGoals}
      renderItem={itemData =><GoalItem id = {itemData.item.id} onDelete = {removeGoalHandler} title={itemData.item.value}></GoalItem>}
      />
         
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
  
});
