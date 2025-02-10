import { Alumno } from "./Alumno";
import Aula from "./Aula";
const alumnos1: Array<Alumno> = [
    { nombre: "Ana", apellidos: "Gómez Pérez", asistencia: true },
    { nombre: "Luis", apellidos: "Fernández Ruiz", asistencia: true },
    { nombre: "Carmen", apellidos: "López García", asistencia: true },
    { nombre: "Javier", apellidos: "Martínez Sánchez", asistencia: true },
    { nombre: "Elena", apellidos: "Torres Jiménez", asistencia: true },
    { nombre: "Pablo", apellidos: "Díaz Romero", asistencia: true },
    { nombre: "Marta", apellidos: "Serrano Ortega", asistencia: true },
    { nombre: "David", apellidos: "Molina Castro", asistencia: true },
    { nombre: "Sara", apellidos: "Ramírez López", asistencia: true },
    { nombre: "Pedro", apellidos: "Ortega Pérez", asistencia: true },
    { nombre: "Clara", apellidos: "Jiménez Fernández", asistencia: true },
    { nombre: "Raúl", apellidos: "Suárez González", asistencia: true },
    { nombre: "Patricia", apellidos: "Rey Delgado", asistencia: true },
    { nombre: "Andrés", apellidos: "Núñez Morales", asistencia: true },
    { nombre: "Rocío", apellidos: "Medina Castro", asistencia: true },
];

const alumnos2: Array<Alumno> = [
    { nombre: "Carlos", apellidos: "Vega Herrera", asistencia: true },
    { nombre: "Laura", apellidos: "Navarro Domínguez", asistencia: true },
    { nombre: "Jesús", apellidos: "Campos León", asistencia: true },
    { nombre: "Eva", apellidos: "Santos Gutiérrez", asistencia: true },
    { nombre: "Fernando", apellidos: "Gil Paredes", asistencia: true },
    { nombre: "Silvia", apellidos: "Rubio Cano", asistencia: true },
    { nombre: "Alejandro", apellidos: "Hernández Soto", asistencia: true },
    { nombre: "Isabel", apellidos: "Rojas Aguilar", asistencia: true },
    { nombre: "Roberto", apellidos: "García Fuentes", asistencia: true },
    { nombre: "Julia", apellidos: "Peña Ramos", asistencia: true },
    { nombre: "Manuel", apellidos: "Crespo Méndez", asistencia: true },
    { nombre: "Cristina", apellidos: "Lara Moreno", asistencia: true },
    { nombre: "Alberto", apellidos: "Sáez Esteban", asistencia: true },
    { nombre: "Natalia", apellidos: "Blanco Lozano", asistencia: true },
    { nombre: "Sergio", apellidos: "Iglesias Castro", asistencia: true },
    { nombre: "Ángela", apellidos: "Román Vázquez", asistencia: true },
    { nombre: "Francisco", apellidos: "Cabrera Martín", asistencia: true },
    { nombre: "Beatriz", apellidos: "Flores Álvarez", asistencia: true },
];

const alumnos3: Array<Alumno> = [
    { nombre: "Raquel", apellidos: "Vargas Pardo", asistencia: true },
    { nombre: "Antonio", apellidos: "Delgado Ferrer", asistencia: true },
    { nombre: "Marina", apellidos: "León Guzmán", asistencia: true },
    { nombre: "Emilio", apellidos: "Cortés Castillo", asistencia: true },
    { nombre: "Susana", apellidos: "Méndez Ortiz", asistencia: true },
    { nombre: "Victor", apellidos: "Garrido Reyes", asistencia: true },
    { nombre: "Lorena", apellidos: "Cano López", asistencia: true },
    { nombre: "Hugo", apellidos: "Navas Romero", asistencia: true },
    { nombre: "Teresa", apellidos: "Sánchez Vega", asistencia: true },
    { nombre: "Óscar", apellidos: "Domingo Serrano", asistencia: true },
    { nombre: "Miriam", apellidos: "Pastor Gómez", asistencia: true },
    { nombre: "Ignacio", apellidos: "Estévez Molina", asistencia: true },
    { nombre: "Vanesa", apellidos: "Ramos Pérez", asistencia: true },
    { nombre: "Esteban", apellidos: "Fernández Torres", asistencia: true },
    { nombre: "Paula", apellidos: "Hidalgo Cruz", asistencia: true },
    { nombre: "Miguel", apellidos: "Ordoñez Ramos", asistencia: true },
    { nombre: "Daniel", apellidos: "Bueno Suárez", asistencia: true },
];

const alumnos4: Array<Alumno> = [
    { nombre: "Elisa", apellidos: "Márquez Pino", asistencia: true },
    { nombre: "Samuel", apellidos: "López Herrera", asistencia: true },
    { nombre: "Rafael", apellidos: "Giménez Gallego", asistencia: true },
    { nombre: "Natalia", apellidos: "Crespo Peña", asistencia: true },
    { nombre: "Tomás", apellidos: "Pérez Sánchez", asistencia: true },
    { nombre: "Verónica", apellidos: "Castaño Hidalgo", asistencia: true },
    { nombre: "Jesica", apellidos: "Martos Ortega", asistencia: true },
    { nombre: "Ricardo", apellidos: "Del Río Santos", asistencia: true },
    { nombre: "Adriana", apellidos: "Fuentes Carvajal", asistencia: true },
    { nombre: "Gustavo", apellidos: "Alonso Cano", asistencia: true },
    { nombre: "Rocío", apellidos: "Montes López", asistencia: true },
    { nombre: "Joaquín", apellidos: "Gálvez Navas", asistencia: true },
    { nombre: "Felipe", apellidos: "Sáez Torres", asistencia: true },
    { nombre: "Tamara", apellidos: "Navarro León", asistencia: true },
    { nombre: "Mauricio", apellidos: "Pardo Martínez", asistencia: true },
    { nombre: "Álvaro", apellidos: "Sánchez Rojas", asistencia: true },
    { nombre: "Estefanía", apellidos: "Díaz Romero", asistencia: true },
    { nombre: "Martín", apellidos: "Reyes Vargas", asistencia: true },
];


function ordenarAlumnos(listaAlumnos: Array<Alumno>): Array<Alumno> {
    return [...listaAlumnos].sort((a, b) => a.apellidos.localeCompare(b.apellidos));
}

const aula1: Aula = {
    nombre: "DAM",
    alumnos: ordenarAlumnos(alumnos1),
    imagen: 'https://www.bbva.com/wp-content/uploads/2019/12/minimalismo_digital.jpg',
    denominacion: 'Desarrollo de Aplicaciones Multiplataforma',
}
const aula2: Aula = {
    nombre: "ASIR",
    alumnos: ordenarAlumnos(alumnos2),
    imagen: 'https://c.wallhere.com/photos/f2/57/minimalism_telephone_computer_technology-1005661.jpg!d',
    denominacion: 'Administración de Sistemas Informáticos en Red',
}
const aula3: Aula = {
    nombre: "DAW",
    alumnos: ordenarAlumnos(alumnos3),
    imagen: 'https://www.bitec.es/wp-content/uploads/2022/02/creatividad-web-project-service-bajo-peso-472x383.png',
    denominacion: 'Desarrollo de Aplicaciones Web',
}
const aula4: Aula = {
    nombre: "SMR",
    alumnos: ordenarAlumnos(alumnos4),
    imagen: 'https://blogs.unitec.mx/hubfs/Imported_Blog_Media/tips-super-basicos-de-seguridad-informatica-5-Dec-17-2022-06-01-39-3384-PM.png',
    denominacion: 'Sistemas Microinformáticos y Redes',
}

export const aulas2: Array<Aula> = [
    aula1,
    aula2,
    aula3,
    aula4,
]