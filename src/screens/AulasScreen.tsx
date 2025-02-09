import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../types/RootStackParamList";
type NavigationProps = NativeStackScreenProps<RootStackParamList, 'AulasStack'>;
const AulasScreen = ({ navigation }: NavigationProps) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pantalla de aulas</Text>
        <Button
            title="Go to details"
            onPress={() => navigation.navigate('AulaStack')}
        />
    </View>
);
export default AulasScreen;