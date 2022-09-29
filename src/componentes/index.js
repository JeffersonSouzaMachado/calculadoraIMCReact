import React from "react";
import { View,Text } from "react-native";
import styles from "./styles";

export default function Resultado({result, condicao}){
    return(
        <View style={{alignItems:"center"}}>
            <Text style={styles.txtResult}>{result}</Text>
                    
            <Text style={styles.txtCondicao}>{condicao}</Text>
        </View>
    )
    
}