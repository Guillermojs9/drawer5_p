import { View, Text, SafeAreaView } from "react-native";
import { styles } from "../styles/Styles";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.bienvenida}>Bienvenido</Text>
            <View style={styles.informacionInstituto}>
            </View>
        </SafeAreaView>

    )
}

export default HomeScreen;