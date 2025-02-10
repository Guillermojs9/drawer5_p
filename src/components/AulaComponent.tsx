import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../types/RootStackParamList";
import Aula from "../entities/Aula";
import { useCustomAulas } from "../providers/AulasContext";
import { Pressable, View, Text, Image } from "react-native";
import { styles } from "../styles/Styles";

interface AulaProps {
    aula: Aula;
    navigation: NativeStackNavigationProp<RootStackParamList, 'AulasStack'>;
};

const AulaComponent = ({ aula, navigation }: AulaProps) => {
    const { setAulaConcreta } = useCustomAulas();
    function onPressFunction() {
        setAulaConcreta(aula);
        navigation.navigate('AulaStack');
    }
    return (
        <Pressable onPress={onPressFunction}>
            <View style={styles.aula}>
                <Image source={{ uri: aula.imagen }} style={styles.imagen} resizeMode="cover"
                />
                <Text style={styles.aulatext}>
                    {aula.nombre}
                </Text>
            </View>
        </Pressable>
    );
};

export default AulaComponent;
