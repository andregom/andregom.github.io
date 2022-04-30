import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';

import getDatesWithNonZeroTransactions from '../../utils/getDatesWithNonZeroTransactions';
import getListPageAttrsAndDataByPath from '../../utils/getListPageAttrsAndDataByPath';

import {
    Container,
    Content
} from './styles';

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

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor='#F7931B'>
                <SelectInput options={validMonths} onChange={() => {}} />
                <SelectInput options={validYears} onChange={() => {}} />
            </ContentHeader>

            <Content>
                <WalletBox
                    title = "saldo" 
                    amount = {150.00} 
                    footerLabel = "atualizado com base nas entradas e saídas" 
                    icon = "dolar" 
                    color = "#4E41F0"
                />
            </Content>
        </Container>
    )
}

export default Dashboard;