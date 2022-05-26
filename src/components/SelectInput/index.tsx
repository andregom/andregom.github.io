import React from 'react';
import { Container } from './styles';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
        empty?: boolean;
    }[],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    title?: string;
    defaultValue?: string | number;
    value?: string | number;
}

const SelectInput: React.FC<ISelectInputProps> = ({
    options,
    onChange,
    title,
    defaultValue,
    value
}) => {
    return (
        <Container>
            <select
                onChange={onChange}
                defaultValue={defaultValue}
                value={value}
            >
                {
                    options.map(option => (
                        
                        <optgroup label={`${option.empty ? 'Invalid' : 'Valid'} ${title}`}>
                            <option
                                key={option.value}
                                value={option.value}
                                disabled={option.empty}
                            >
                                {option.label}
                            </option>
                        </optgroup>
                    ))
                }
            </select>
        </Container>
    );
}

export default SelectInput;