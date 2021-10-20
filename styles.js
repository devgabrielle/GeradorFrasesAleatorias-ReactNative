import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 250,
        height: 250,
    },
    textoFrase: {
        fontSize: 20,
        color: '#dd7b22',
        marginTop: 40,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    botao: {
        marginTop: 30,
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd7b22'
    }
});
