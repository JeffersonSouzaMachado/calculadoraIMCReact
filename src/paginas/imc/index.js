import React, {useState} from "react";
import { View, Text, TextInput,TouchableOpacity } from "react-native";
import Resultado from "../../componentes";
import styles from "./styles";


export default function Imc(){

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [result,  setResult] = useState(null);
    const [condicao, setCondicao] =useState(null);

      


    function Calcular(){
        if(peso != null && altura != null){
            let imc = (peso / (altura * altura)).toFixed(2)
            setResult(imc)
           
            if(imc <= 18.5){
                setCondicao('Abaixo do peso')
              
            }else if(imc <= 24.9){
                setCondicao('Peso ideal, Parabéns')
                setCor("red")
            }else if( imc <= 29.9){
                setCondicao('Levemente acima do peso')
            }else if( imc <= 34.9){
                setCondicao('Obesidade grau I')
            }else if( imc <= 39.9){
                setCondicao('Obesidade grau II, severa')
            }else if(imc >= 40){
                setCondicao('Obesidade grau III, mórbida')
            }


            
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.divTitulo}>
                <Text style={styles.txtTitulo}></Text>
                <View style={styles.coluna}>
                    <View style={styles.coluna1}>
                        <Text style={styles.txtTitulo}>Calculadora de IMC</Text>
                    </View>
                    <View style={styles.coluna2}></View>
                </View>
            </View>

            <View style={styles.divImg}>
                
            </View>

            <View style={styles.divForm}>

                <Text style={styles.txtHead}>Insira as informações Abaixo</Text>
                <TextInput style={styles.input}
                value={peso}
                placeholder="Digite seu PESO"
                keyboardType="numeric"
                onChangeText={setPeso}/>
                

                <TextInput style={styles.input}
                value={altura}
                placeholder="Digite sua ALTURA"
                keyboardType="numeric"
                onChangeText={setAltura}/>

                <TouchableOpacity onPress={Calcular} style={styles.btnCalcular}>
                    <Text style={styles.txtBtnCalcular}>Calcular</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divResult}>
                <Resultado result={result} condicao={condicao}/>
            </View>

            
        </View>
    )
}