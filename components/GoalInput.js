
import { StyleSheet, TextInput,Button, View,Modal,Image} from 'react-native';
import { useState } from 'react';
function GoalInput(props){
  const[enteredGoalText,setEnteredGoalText]=useState('');
  function goalInputHandler(enterdText){
    setEnteredGoalText(enterdText);
  }
  function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
return(
  <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
      <Image style={styles.Image} source={require('../assets/images/goal.png')}/>
      <TextInput style={styles.textInput}  placeholder='Your goals...' onChangeText={goalInputHandler} value={enteredGoalText}/>
      <View style={styles.buttonsContainer}>
       
        <View style={styles.button}>
          <Button title='Cancel' onPress={props.Cancel}  color={'#f31282'}/>
        </View>
        <View style={styles.button}>
          <Button title='Add Goal' onPress={addGoalHandler} color={'#a882da'}/>
        </View>
      </View>
    </View>
   
  </Modal>
);
};
export default GoalInput;

const styles=StyleSheet.create({
  inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    backgroundColor:'#311b6b',
    paddingBottom:100,
  },
  Image:{
    width:100,
    height:100,
    margin:20,
    
  },
  textInput:{
    borderWidth:1,
    borderColor:'#e4d0ff',
    borderRadius:6,
    backgroundColor:'#e4d0ff',
    width:'100%',
    color:'#120438',
    padding:16,
    
  },
  buttonsContainer:{
    flexDirection:'row',   
    marginTop: 16,
  
  },
  button:{
    width:100,
    marginHorizontal:8,
  },
    
})