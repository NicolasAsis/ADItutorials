import React, {useState,useEffect} from 'react';
import {View,Text,Animated,Button} from 'react-native';

import EffectTut from './EffectTut';

function AnimatedTut(){

    const [op_value] = useState(new Animated.Value(1));

    const [bg_color] = useState(new Animated.Value(1));

    const [text_color] = useState(new Animated.Value(1));

    const [theText,setText] = useState("This view and text is going to get animated!");

    const [Show, setShow] = useState(false);

    var my_bg = bg_color.interpolate({
        inputRange: [0, 1],
        outputRange: ["skyblue", "red"]
    })

    var my_text = text_color.interpolate({
        inputRange: [0, 1],
        outputRange: ["white", "black"]
    })

    return(
        <Animated.View style={{backgroundColor:my_bg}}>
            <Animated.Text style={{color:my_text}}>
                {theText}
            </Animated.Text>
            <Button
                title="Go Invisible!"
                onPress={()=>{
                    Animated.timing(
                       
                        bg_color,
                        {
                            toValue:0,
                            duration:500
                        }
                        // text_color,
                        // {
                        //     toValue:0,
                        //     duration:500
                        // }
                    ).start();
                    Animated.timing(
                        text_color,
                        {
                            toValue:0,
                            duration:500
                        }
                    ).start();
                    setText("It's animated :)");
                    setShow(true)
                }}
            />
            <EffectTut 
                theText={theText}
                Show={Show}
            />
        </Animated.View>
    );
}

export default AnimatedTut;