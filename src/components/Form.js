import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class Logo extends Component{
  
    render(){
        return(
            <View style={styles.container}> 
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='E-mail'placeholderTextColor="#ffffff" selectionColor="#fff"keyboardType="email-address"onSubmitEditing={()=>this.password.focus()}/>
               
                 <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='password'secureTextEntry={true}placeholderTextColor="#ffffff" ref={(input)=>this.password=input}/>
                
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
                    
                </TouchableOpacity>
                
                </View>

           
        )

    }
}

const styles = StyleSheet.create({
    container :{     
      flexGrow:1,
      justifyContent:'center',
      alignItems:'center'
      
    },
    inputBox :{
      width:300,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius:25,
      paddingHorizontal:18,
      fontSize:16,
      color:'#ffffff',
      marginVertical:10
    },
    button :{
      width:300,
      backgroundColor:'rgba(1,50,67,1)',
      borderRadius:25,
      marginVertical:10,
      paddingVertical:16
    },

    buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
    
    
  });