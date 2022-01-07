import React, { useState, useEffect} from "react";

import {
    Container,
    ToggleLabel,
    ToggleSelector
} from "./styles";


const Toggle: React.FC = () => {

    const [theme, setTheme] = useState(false);
    
    const handleToggle = (currentTheme: boolean) => {
        setTheme(!currentTheme);
    }

    return (
        <Container>
            < ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                checked = {theme}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={() => handleToggle(theme)}
            />
            < ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
}

export default Toggle;