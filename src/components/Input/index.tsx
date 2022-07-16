import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ ...all }) => {
    return (
        <Container { ...all } />
    );
}

export default Input;