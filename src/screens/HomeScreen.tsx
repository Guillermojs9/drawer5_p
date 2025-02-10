import { View, Text, SafeAreaView } from "react-native";
import { styles } from "../styles/Styles";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View></View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Pantalla de Inicio</Text>
            </View>
        </SafeAreaView>

    )
}

export default HomeScreen;