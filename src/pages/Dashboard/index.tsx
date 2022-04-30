import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import memoize from "fast-memoize";

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import { IRawData } from '../../interfaces/financialTransactionsRaw';

import getDatesWithNonZeroTransactions from '../../utils/getDatesWithNonZeroTransactions';
import getListPageAttrsAndDataByPath from '../../utils/getListPageAttrsAndDataByPath';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

import {
    Container,
    Content
} from './styles';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [validMonths, setValidMonths] = useState<{
        value: string | number;
        label: string | number;
    }[]>([]);
    const [validYears, setValidYears] = useState<{
        value: string | number;
        label: string | number;
    }[]>([]);

    const listType = "all";
    
    const pathDependentProps = useMemo(() => {
        return getListPageAttrsAndDataByPath(listType)
    }, [listType]);

    const datesWithTransactions = useMemo(() => {
        return getDatesWithNonZeroTransactions(pathDependentProps.data);
    }, [pathDependentProps]);

    useEffect(() => {
        const currentValidMonths = datesWithTransactions.find(e => {
            return e.year.value === Number(yearSelected);
        })?.months
        
        if(currentValidMonths !== undefined) setValidMonths(currentValidMonths);
        else setValidMonths([]);
    },[datesWithTransactions, yearSelected, listType]);
    
    useEffect(() => {
        setValidYears(datesWithTransactions.map(dates => dates.year));
    },[datesWithTransactions, listType]);

    useLayoutEffect(() => {
        if (validYears.length > 0) {
            if (!validYears.some(month => month.value == yearSelected))
                setYearSelected(Number(validYears[0].value));
        }
    }, [validYears, datesWithTransactions, listType]);

    useEffect(() => {
        if (validMonths.length > 0) {
            if (!validMonths.some(month => month.value == monthSelected))
                setMonthSelected(Number(validMonths[0].value));
        }
    }, [yearSelected, validMonths]);

    const totalCount = useMemo(() => memoize((listOfTransactions) => {
        let total: number = 0;
        
        console.log(monthSelected)
        listOfTransactions.forEach((item: IRawData) => {
            console.log(monthSelected)
            console.log(monthSelected)
            const date = new Date(item.date);
            const year = date.getFullYear();                
            const month = date.getMonth() + 1;

            if (month == monthSelected && year == yearSelected) {
                console.table(item);
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('Invalid amount! Not a valid number.')
                }
            }
        })


        return total;
    }), [yearSelected, monthSelected]);

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor='#F7931B'>
            <SelectInput options={validMonths} onChange={(e) => setMonthSelected(Number(e.target.value))} defaultValue={monthSelected} value={monthSelected} />
            <SelectInput options={validYears} onChange={(e) => setYearSelected(Number(e.target.value))} defaultValue={yearSelected} value={yearSelected} />
            </ContentHeader>

            <Content>
                <WalletBox
                    title = "saldo" 
                    amount = {totalCount(gains) - totalCount(expenses)} 
                    footerLabel = "atualizado com base nas entradas e saídas" 
                    icon = "dolar" 
                    color = "#4E41F0"
                />
                
                <WalletBox
                    title = "entradas" 
                    amount = {totalCount(gains)} 
                    footerLabel = "atualizado com base nas entradas e saídas" 
                    icon = "arrowUp" 
                    color = "#F7931B"
                />

                <WalletBox
                    title = "saídas" 
                    amount = {totalCount(expenses)} 
                    footerLabel = "atualizado com base nas entradas e saídas" 
                    icon = "arrowDown" 
                    color = "#E44C4E"
                />

                <MessageBox
                    title = "Muito bem!"
                    description = "Sua carteira está positiva!"
                    footerText = "Continue assim. Considere investir o seu saldo."
                    icon = {happyImg}
                />
            </Content>
        </Container>
    )
}

export default Dashboard;