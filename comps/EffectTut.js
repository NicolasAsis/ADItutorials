import React, {useState,useEffect} from 'react';
import {View,Text,Animated,Button} from 'react-native';

function EffectTut(props) {

    const [op] = useState(new Animated.Value(1))

    useEffect(()=>{
        if(props.Show == true){
            Animated.timing(
                op,
                {
                  toValue:0,
                  duration:500  
                }
            ).start();
        }  
    },[props.theText]);
    return(
        <Animated.View style={{opacity:op}}>
            <Text>
                This is a different comp, but click the button and I will be invisible.
            </Text>
        </Animated.View>
    );
}

export default EffectTut;