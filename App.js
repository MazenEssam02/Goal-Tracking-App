import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput ,FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  
  const[goalList,setGoalList]=useState([]);  
  const[modalIsVisible,setModalIsVisible]=useState(false);
  function addGoalHandler(enteredGoalText){
    setGoalList((goalList)=>[...goalList,{text:enteredGoalText,id:Math.random().toString()}]);
    setModalIsVisible(false);
  }
  function onDeleteHandler(itemId){
  setGoalList((goalList)=>{
    return(goalList.filter((goal)=>goal.id!==itemId)); //Important
  });
  }
  function modalVisible(){
    setModalIsVisible(true);
  }
  function modalInvisible(){
    setModalIsVisible(false);
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add new goal' onPress={modalVisible} color={'#9e5bf5'}/>
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible}Cancel={modalInvisible}/>
      <View style={styles.goalsContainer}>
      <FlatList 
      data={goalList} 
      renderItem={(itemData)=>{
        return(
        <GoalItem item={itemData.item} onDeleteGoal={onDeleteHandler}/>
        );
      }}
      keyExtractor={(item,index)=>{
        return item.id;
      }} 
      alwaysBounceHorizontal={false}
      />
      
      
      </View>      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  paddingTop:50,
  paddingHorizontal:16,
  flex:1,

 
 },
goalsContainer:{
  flex:5,
},


});
