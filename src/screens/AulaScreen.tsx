import { useEffect, useState } from "react";
import { View, Text, Alert, SafeAreaView, FlatList, Button, Pressable } from "react-native";
import { useCustomAulas } from "../providers/AulasContext";
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { styles } from "../styles/Styles";
import AlumnoComponent from "../components/AlumnoComponent";

const getCurrentDate = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  return `${date}-${month}-${year}`;
};

const AulaScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [fecha, setFecha] = useState<string>(getCurrentDate());
  const { aulaConcreta } = useCustomAulas();

  if (!aulaConcreta) {
    return <Text>Ningún aula seleccionada</Text>
  }

  const generatePDF = async () => {
    setLoading(true);
    try {
      const html = `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <style>
          body {
            font-family: 'Helvetica', sans-serif;
            font-size: 14px;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
          }
          header {
            background-color: #4ca1af;
            color: white;
            text-align: center;
            padding: 10px 0;
            font-size: 22px;
            font-weight: bold;
            border-radius: 10px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
          }
          th {
            background-color: #6c8ee3;
            color: white;
          }
          tr:nth-child(even) {
            background-color: #f2f2f2;
          }
          footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <header>Lista de Alumnos</header>
        <h2>${aulaConcreta.nombre}</h2>
        <h3>Fecha: ${fecha}</h3>
        <table>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Asistencia</th>
          </tr>
          ${aulaConcreta.alumnos.map(alumno => `
          <tr>
            <td>${alumno.nombre}</td>
            <td>${alumno.apellidos}</td>
            <td>${alumno.asistencia ? 'asistido' : 'falta'}</td>
          </tr>
          `).join('')}
        </table>
        <footer>Reporte generado automáticamente</footer>
      </body>
    </html>
            `;

      const { uri } = await Print.printToFileAsync({
        html,
        base64: false
      });
      const isSharingAvailable = await Sharing.isAvailableAsync();

      if (isSharingAvailable) {
        await Sharing.shareAsync(uri, {
          mimeType: 'application/pdf',
          dialogTitle: 'Compartir lista de asistencia',
          UTI: 'com.adobe.pdf'
        });
      } else {
        Alert.alert('Error', 'Sharing is not available on this device');
      }

    } catch (error) {
      console.error('PDF generation error:', error);
      Alert.alert('Error',
        error instanceof Error ? error.message : 'An unknown error occurred while generating the PDF'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.aulatext}>{aulaConcreta.denominacion}</Text>
      <Text style={styles.fechaText}>{fecha}</Text>
      <View style={styles.parent}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={aulaConcreta.alumnos}
          renderItem={({ item }) =>
            <AlumnoComponent alumno={item} />
          }
          keyExtractor={item => item.nombre + " "}
        />
      </View>
      <Button
        onPress={generatePDF}
        title={loading ? "Generando..." : "Descargar PDF"}
        disabled={loading}
        color="#4F98CA"
        
      />
    </SafeAreaView>
  );
};

export default AulaScreen;