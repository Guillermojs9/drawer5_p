import { View, Text, Button, SafeAreaView, FlatList } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../types/RootStackParamList";
import { useCustomAulas } from "../providers/AulasContext";
import { styles } from "../styles/Styles";
import React from "react";
import AulaComponent from "../components/AulaComponent";
type NavigationProps = NativeStackScreenProps<RootStackParamList, 'AulasStack'>;
const AulasScreen = ({ navigation }: NavigationProps) => {
    const { aulas } = useCustomAulas();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.bienvenida}>Mis aulas:</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={aulas}
                renderItem={({ item }) =>
                    <AulaComponent aula={item} navigation={navigation} />
                }
                keyExtractor={item => item.nombre + " "}
            />
        </SafeAreaView>
    );
};
export default AulasScreen;