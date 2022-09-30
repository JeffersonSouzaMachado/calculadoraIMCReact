import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coluna: {
        flex: 1,
        flexDirection: 'row',

    },
    coluna1: {
        flex: 1,
        backgroundColor: 'blue',
        height: "80%"
    },
    coluna2: {
        flex: 0.4,
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center',
        height: "80%"
    },
    divForm: {
        flex: 3,
        //backgroundColor:"yellow"
        alignContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    divLista: {
        flex: 2,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
    },
    txtTitulo: {
        fontSize: 30,
        fontWeight: '600',
        marginTop: 20,
        marginStart: 10,
        color: 'black'
    },
    input: {
        width: '70%',
        height: 50,
        borderRadius: 15,
        fontSize: 20,
        borderWidth: 2,
        // padding: 12,
        marginTop: 5,
        alignItems: 'center',
        textAlign: 'center'
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
        fontSize: 20,
        fontWeight: '600',
        marginTop: 5,
        marginBottom: 20,
    },
    btnReset: {
        width: "60%",
        height: 60,
        backgroundColor: "grey",
        borderRadius: 50,
        //marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    txtReset: {
        fontSize: 20
    },
    card:{
        backgroundColor:"lightgrey",
        width:350,
        height:40,
        marginTop:10
    }

})

export default styles;