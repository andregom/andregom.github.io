import React, { useMemo, useState, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content, Filters } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import BallanceHistoryCard from '../../components/BallanceHistoryCard';

import { IData } from '../../interfaces/financialTransactions';

import getListAttrsAndDataByPath from '../../utils/getListAttrsAndDataByPath';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import getDatesWithNonZeroTransactions from '../../utils/getDatesWithNonZeroTransactions';

const List: React.FC = () => {
    const [data, setData] = useState<IData[]>([]);
    const [validMonths, setValidMonths] = useState<{
        value: string | number;
        label: string | number;
    }[]>([]);
    const [validYears, setValidYears] = useState<{
        value: string | number;
        label: string | number;
    }[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

    const { type: listType } = useParams();
    
    const pathDependentProps = useMemo(() => {
        return getListAttrsAndDataByPath(listType)
    }, [listType]);

    const datesWithTransactions = useMemo(() => {
        return getDatesWithNonZeroTransactions(pathDependentProps.data);
    },[pathDependentProps]);

    useLayoutEffect(() => {
        const currentValidMonths = datesWithTransactions.find(e => {
            return e.year.value === Number(yearSelected);
        })?.months
        
        if(currentValidMonths !== undefined) setValidMonths(currentValidMonths);
        else setValidMonths([]);
    },[datesWithTransactions, yearSelected, listType]);
    
    useEffect(() => {
        setValidYears(datesWithTransactions.map(dates => dates.year));
    },[datesWithTransactions, listType]);
    
    useEffect(() => {
        const filteredDate = pathDependentProps.data.filter(item => {
            const date: Date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());
            
            return month === monthSelected && year === yearSelected;
        });
        
        const formattedData = filteredDate.map(item => {
            return {
                id: String(Math.random() * filteredDate.length),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                type: item.type,
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41f0' : '#E44C4E'
            }
        });
        
        setData(formattedData);
    },[pathDependentProps, monthSelected, yearSelected]);

    useEffect(() => {
    }, [datesWithTransactions, yearSelected, validMonths, validYears]);

    useEffect(() => {
        if (validYears.length > 0) {
            if (!validYears.some(month => month.value == yearSelected))
                setYearSelected(String(validYears[0].value));
        }
    }, [validYears, datesWithTransactions, listType]);

    useEffect(() => {
        if (validMonths.length > 0) {
            if (!validMonths.some(month => month.value == monthSelected))
                setMonthSelected(String(validMonths[0].value));
        }
    }, [yearSelected, validMonths]);
    
    return (
    <Container>
        <ContentHeader title={pathDependentProps.title} lineColor={pathDependentProps.lineColor}>
            <SelectInput options={validMonths} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
            <SelectInput options={validYears} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
        </ContentHeader>

        <Filters>
            <button
                type="button"
                className="tag-filter tag-filter-recurrent"
            >
                Recorrentes
            </button>

            <button
                type="button"
                className="tag-filter tag-filter-eventual"
            >
                Eventuais
            </button>
        </Filters>

        <Content>
            {
                data.map(item => (
                    <BallanceHistoryCard
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        amount={item.amountFormatted}
                    />
                ))
            }
        </Content>
    </Container>)
}

export default List;