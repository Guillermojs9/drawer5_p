import { createContext, ReactNode, useContext, useState } from "react";
import Aula from "../entities/Aula";
import { aulas2 } from "../entities/Aulas";

interface CustomAulasTypes {
    aulas: Aula[],
    aulaConcreta: Aula | undefined,
    setAulaConcreta: (aula: Aula) => void,
}

const CustomAulasContext = createContext<CustomAulasTypes | undefined>(undefined);

export const CustomAulasProvider = ({ children }: { children: ReactNode }) => {
    const [aulas] = useState<Aula[]>(aulas2);
    const [aulaConcreta, setAulaConcreta] = useState<Aula>();
    return (
        <CustomAulasContext.Provider value={{ aulas, aulaConcreta, setAulaConcreta }}>
            {children}
        </CustomAulasContext.Provider>
    );
};

export const useCustomAulas = () => {
    const context = useContext(CustomAulasContext);
    if (context === undefined) {
        throw new Error('useCustomAulas must be used within a CustomNavigationProvider');
    }
    return context;
};
