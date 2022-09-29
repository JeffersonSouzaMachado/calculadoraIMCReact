import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    divTitulo:{
        flex:1,
        //backgroundColor:"red"
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:"lightgrey",
     
        
    },
   
    divForm:{
        flex:3,
        //backgroundColor:"yellow"
        alignContent:"center",
        alignItems:"center"
        
        
    },
    divResult:{
        flex:1,
        //backgroundColor:"pink"
        alignItems:"center",
        justifyContent:"center",
    },
    txtTitulo:{
        fontSize:30,
        fontWeight:'600',
        marginTop:20,
        
    },
    input:{
        width:'70%',
        height:50,
        borderRadius:15,
        fontSize:20,
        borderWidth:2,
        padding:12,
        marginTop:10              
    },
    btnCalcular:{
        width:"50%",
        height:50,
        backgroundColor:"grey",
        borderRadius:15,
        marginTop:30,
        alignItems:"center",
        justifyContent:"center"
    },
    txtBtnCalcular:{
        fontSize:27,
        fontWeight:"500",
        
    },
    
})

export default styles;