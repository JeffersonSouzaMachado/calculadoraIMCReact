import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coluna:{
        flex:1,
        flexDirection:'row',
               
    },
    coluna1:{
        flex:1,
        backgroundColor:'blue'
    },
    coluna2:{
        flex:0.4,
        backgroundColor:'aqua',
       
    },
    divTitulo: {
        flex: 1,
        backgroundColor:"red",
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: "lightgrey",
    },
    divForm: {
        flex: 3,
        //backgroundColor:"yellow"
        alignContent: "center",
        alignItems: "center"
    },
    divResult: {
        flex: 1,
        //backgroundColor:"pink"
        alignItems: "center",
        justifyContent: "center",
    },
    txtTitulo: {
        fontSize: 30,
        fontWeight: '600',
        marginTop: 20,
        marginStart: 10,
        color:'white'
    },
    input: {
        width: '70%',
        height: 50,
        borderRadius: 15,
        fontSize: 20,
        borderWidth: 2,
       // padding: 12,
        marginTop: 10,
        alignItems:'center',
        textAlign:'center'
    },
    btnCalcular: {
        width: "50%",
        height: 50,
        backgroundColor: "grey",
        borderRadius: 15,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    txtBtnCalcular: {
        fontSize: 27,
        fontWeight: "500",

    },
    txtHead: {
        fontSize:20,
        fontWeight:'600',
        marginTop:20,
        marginBottom:20,
    }

})

export default styles;