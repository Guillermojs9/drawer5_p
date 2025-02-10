import { View, Text, SafeAreaView } from "react-native";
import { styles } from "../styles/Styles";

const ConfiguracionScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Pantalla de Configuración</Text>
            </View>
        </SafeAreaView>
    );
};

export default ConfiguracionScreen;