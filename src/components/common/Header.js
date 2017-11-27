import React from 'react';
import {Text, View} from 'react-native';



//Make a component
const Header= (props) => {
const {textStyle, viewStyle} = styles;
this.props = props;

    return (
    <View style= {viewStyle}> 
    <Text style={textStyle}>{this.props.headerText}</Text>

    </View> 

);
};


const styles ={
    viewStyle:{
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.2,
      paddingTop: 20,
    },

    textStyle:{
        fontSize: 20
    }

};

export {Header};