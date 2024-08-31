
import { StyleSheet, Text, View,Pressable} from 'react-native';
function GoalItem(props){
//  function onDeleteHandler(){
//   props.onDeleteGoal(props.item.id);
//   }
return(
  
    <View  style={styles.goalItem}>
      <Pressable
      android_ripple={{color:'#200345'}}
      style={(pressData)=>pressData.pressed&& styles.pressedStyle} //Important
      onPress={props.onDeleteGoal.bind(this,props.item.id)}>{/* Important */}
        <Text style={styles.goalText} >{props.item.text}</Text>
      </Pressable>
    </View>

);
};
export default GoalItem;

const styles=StyleSheet.create({
  goalItem:{
    backgroundColor:'#7129d0',
    
    
    margin:8,
    borderWidth:1,
    borderRadius:6,
    
    },
    goalText:{
      color:'white',
      padding:8,
    },
    pressedStyle:{
      opacity:0.5,    }
    
})