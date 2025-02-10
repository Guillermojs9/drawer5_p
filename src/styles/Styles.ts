import { StyleSheet } from "react-native";

export const colors = {
    blanco: '#FAFFFE',
    verde: '#50D890',
    azul: '#4F98CA',
    oscuro: '#272727',
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blanco,
        padding: 20,
    },
    aula: {
        width: 275,
        height: 275,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 25,
        backgroundColor: 'white',
        borderColor: colors.azul,
        borderWidth: 3,
        overflow: 'hidden',
        position: 'relative',
    },
    alumnoView: {
        height: 75,
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
    },
    aulatext: {
        color: colors.oscuro,
        fontSize: 25,
        fontWeight: 'bold',
    },
    alumnotext: {
        color: colors.oscuro,
        fontSize: 18,
        fontWeight: 'bold',
    },
    fechaText: {
        color: colors.oscuro,
        fontSize: 18,
        fontWeight: 'bold',
    },
    bienvenida: {
        color: colors.oscuro,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: colors.oscuro,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonPressed: {
        backgroundColor: '#585858',
        elevation: 5,
    }
});
