import React from 'react';
import { Container } from './styles';

import dollarImg from '../../assets/dollar.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import CountUp from 'react-countup';

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerLabel,
    icon,
    color
}) => {

    const iconSelected = () => {
        switch (icon) {
            case 'dolar':
                return dollarImg;
            case 'arrowUp':
                return arrowUp;
            case 'arrowDown':
                return arrowDown;
            default:
                return "";
        }
    }

    return (
        <Container color={color}>
            <span>{title}</span>
            <h2>{
                <CountUp 
                    end={amount}
                    prefix={"R$ "}
                    separator="."
                    decimal=","
                    decimals={2}
                />
            }</h2>
            <small>{footerLabel}</small>
            {iconSelected() && <img src={iconSelected()} alt={title} />}
        </Container>
    )
}

export default WalletBox;