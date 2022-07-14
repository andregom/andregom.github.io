import React, { useState, useEffect} from "react";

import {
    Container,
    ToggleLabel,
    ToggleSelector
} from "./styles";

interface IToggleProps {
    checked: boolean;
    labelLeft: string;
    labelRight: string;
    onChange(): void;
}


const Toggle: React.FC<IToggleProps> = ({
    checked,
    labelLeft,
    labelRight,
    onChange
}) => {

    const [theme, setTheme] = useState(false);
    
    const handleToggle = (currentTheme: boolean) => {
        setTheme(!currentTheme);
    }

    return (
        <Container>
            < ToggleLabel>{labelLeft}</ToggleLabel>
            <ToggleSelector
                checked = {checked}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={onChange}
            />
            < ToggleLabel>{labelRight}</ToggleLabel>
        </Container>
    );
}

export default Toggle;