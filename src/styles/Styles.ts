import { StyleSheet } from "react-native";

export const lightTheme = {
    blanco: '#FAFFFE',
    verde: '#50D890',
    azul: '#4F98CA',
    oscuro: '#272727',
}

export const darkTheme = {
    blanco: '#1F1F1F',
    verde: '#3B8A5D',
    azul: '#3A6F87',
    oscuro: '#FAFAFA',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightTheme.blanco,
        padding: 20,
    },
    listaAulas: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: lightTheme.blanco,
        padding: 20,
    },
    aula: {
        width: 235,
        height: 175,
        justifyContent: 'center',
        alignItems: 'center',
        //marginBottom: 10,
        marginRight: 10,
        borderRadius: 25,
        backgroundColor: 'white',
        borderColor: lightTheme.azul,
        borderWidth: 3,
        overflow: 'hidden',
        position: 'relative',
    },
    alumnoView: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 2,
        borderBottomRightRadius: 6,
        borderTopStartRadius: 6,
    },
    parent: {
        borderRadius: 25,
        flex: 1,
        width: 350,
        height: 350,
        marginBottom: 20,
        backgroundColor: '#FFFFF',
    },
    aulatext: {
        color: lightTheme.oscuro,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    alumnotext: {
        color: lightTheme.oscuro,
        fontSize: 18,
        fontWeight: 'bold',
    },
    fechaText: {
        color: lightTheme.oscuro,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bienvenida: {
        color: lightTheme.oscuro,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: lightTheme.oscuro,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonPressed: {
        backgroundColor: '#585858',
        elevation: 5,
    },
    imagen: {
        width: '100%',
        height: '80%',
    },
    informacionInstituto: {
        height: 200,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#50D890',
    },
    generarPdf: {
        marginTop: 20,
    }
});
