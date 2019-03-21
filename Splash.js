import React, { Component } from 'react';
import { 
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

class SplashScreen extends Component{
    render(){
        return (
             <View style = {styles.stylish}>
                   <Image  style={{width: 260, height: 200 ,left:25 ,top:60}}
          source={{uri: 'https://i.pinimg.com/originals/9a/be/25/9abe2519e3c7d05f4457b997a3988b8d.png'}} />
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.subtitle}>Powered By Sikap.in</Text>
                 </View>
                  
                );
            }
        }
export default SplashScreen;

const styles = StyleSheet.create({
    title: {color: '#000000',fontSize: 35, fontWeight: 'bold'},
    subtitle: {color: '#000000',fontSize: 20, fontWeight: '200'},
    stylish: {backgroundColor: 'white', justifyContent:'center',flex:1, alignItems: 'center'}
});

