import { Alumno } from "./Alumno";

export default interface Aula {
    nombre: string;
    alumnos: Alumno[];
    imagen: string;
    denominacion: string;
}