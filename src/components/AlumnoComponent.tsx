import { Pressable, View, Text } from "react-native";
import { Alumno } from "../entities/Alumno";
import { useEffect, useState } from "react";
import { styles } from "../styles/Styles";
interface AlumnoProps {
    alumno: Alumno;
}

const AlumnoComponent = ({ alumno }: AlumnoProps) => {
    const [asistencia, setAsistencia] = useState<boolean>(alumno.asistencia);
    function onPressFunction() {
        console.log("Antes: " + alumno.asistencia)
        alumno.asistencia = alumno.asistencia ? false : true;
        setAsistencia(!asistencia);
        console.log("Después: " + alumno.asistencia)
    }
    useEffect(() => {

    }, [alumno.asistencia])
    return (
        <Pressable onPress={onPressFunction}>
            <View style={[styles.alumnoView, { borderWidth: 2, borderColor: asistencia ? '#50D890' : '#D85050' }]}>
                <Text style={styles.alumnotext}>{`${alumno.apellidos}, ${alumno.nombre}`}</Text>
            </View>
        </Pressable>
    )
};

export default AlumnoComponent;
