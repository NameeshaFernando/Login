import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';


export default class Logo extends Component{
    render(){
        return(
            <View style={styles.container}> 
                <Image style={{width:100,height:110}}
                source={require('../images/2.png')}/>
                <Text style={styles.logoText}>Welcome to My App !!!</Text>
                </View>

           
        )

    }
}

const styles = StyleSheet.create({
    container :{     
      flexGrow:1,
      justifyContent:'flex-end',
      alignItems:'center'
      
    },
    logoText :{
        marginVertical:14,
        fontSize:18,
        color:'rgba(225,225,225,0.7)'
    }
    
  });