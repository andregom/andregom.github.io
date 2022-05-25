import React from 'react';
import { Container } from './styles';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
        empty?: boolean;
    }[],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue?: string | number;
    value?: string | number;
}

const SelectInput: React.FC<ISelectInputProps> = ({
    options,
    onChange,
    defaultValue,
    value
 }) => {
    return (
        <Container>
            <select onChange={onChange} defaultValue={defaultValue} value={value}>
                {
                    options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                            disabled={option.empty}
                            style={{ color: "#9a449aa"} }
                        >
                            {option.label}
                        </option>
                    ))   
                }         
            </select>
        </Container>
    );
}

export default SelectInput;