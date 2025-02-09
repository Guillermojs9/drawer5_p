import { StyleSheet } from "react-native";

/*
Casi blanca --> EFFFFB
Verde --> 50D890
Azul --> 4F98CA
Oscuro --> 272727
*/

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFFFFB',
        padding: 20,
    },
    aula: {
        width: 325,
        height: 325,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 25,
        backgroundColor: 'white',
        borderColor: '#4F98CA',
        borderWidth: 3,
        overflow: 'hidden',
        position: 'relative',
    },
    alumnoView: {
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'white',
        marginVertical: 2,
        borderBottomRightRadius: 6,
        borderTopStartRadius: 6,
    },
    parent: {
        borderRadius: 25,
        flex: 1,
        width: 400,
        height: 400,
    },
    aulatext: {
        color: '#272727',
        fontSize: 25,
        fontWeight: 'bold',
    },
    alumnotext: {
        color: '#272727',
        fontSize: 18,
        fontWeight: 'bold',
    },
    fechaText: {
        color: '#272727',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bienvenida: {
        color: '#272727',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    button: {
        backgroundColor: '#4F98CA',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#4F98CA',
        elevation: 3,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        marginTop: 10,
    },
    buttonText: {
        color: '#272727',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonPressed: {
        backgroundColor: '#585858',
        elevation: 5,
    }
});
