
import React, { useMemo, useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content, Filters } from './styles';
import handleFilterButtonActivationTag from '../../utils/appearance/handleFilterButtonsActivationTag';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import BallanceHistoryCard from '../../components/BallanceHistoryCard';

import { IData } from '../../interfaces/financialTransactions';

import getListPageAttrsAndDataByPath from '../../utils/getListPageAttrsAndDataByPath';
import formatCurrency from '../../utils/formatting/formatCurrency';
import formatDate from '../../utils/formatting/formatDate';
import getDatesWithNonZeroTransactions from '../../utils/getDatesWithNonZeroTransactions';
import { useTheme } from '../../utils/hooks/themes';

const List: React.FC = () => {
    const filterButtons = useRef<HTMLButtonElement[]>([]);
    const [data, setData] = useState<IData[]>([]);
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
    const [selectedFrequencies, setselectedFrequencies] = useState<{
        recurrent: boolean,
        sporadic: boolean 
    }>({recurrent: true, sporadic: true});

    const { theme } = useTheme();
    const { type: listType } = useParams();
    
    const pathDependentProps = useMemo(() => {
        return getListPageAttrsAndDataByPath(listType, theme.title)
    }, [listType, theme]);

    const datesWithTransactions = useMemo(() => {
        return getDatesWithNonZeroTransactions(pathDependentProps.data);
    }, [pathDependentProps]);

    const handleFilterButtonClick = (clickedButtonValue: string) => {
        if (clickedButtonValue !== undefined){
            if (clickedButtonValue === 'recurrent' || clickedButtonValue === 'sporadic') {
                handleFrequenceSelector(clickedButtonValue);
            }
        }
    }

    const handleFrequenceSelector = (pressedButtonValue: 'recurrent' | 'sporadic') => {
        const currentFilterState = !selectedFrequencies[pressedButtonValue];
        selectedFrequencies[pressedButtonValue] = currentFilterState;
        setselectedFrequencies({...selectedFrequencies});
        const selectedButton = filterButtons.current.filter(el => {return el.value === pressedButtonValue})[0];
        
        handleFilterButtonActivationTag(selectedButton, currentFilterState); 
    }

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
        const filteredDate = pathDependentProps.data.filter(item => {
            const date: Date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const frequency = item.frequency === 'recorrente' ? 'recurrent' : 'sporadic';
            
            return month === monthSelected && year === yearSelected && selectedFrequencies[frequency];
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
    },[pathDependentProps, monthSelected, yearSelected, selectedFrequencies]);

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
    
    return (
    <Container>
        <ContentHeader title={pathDependentProps.title} lineColor={pathDependentProps.lineColor}>
            <SelectInput options={validMonths} onChange={(e) => setMonthSelected(Number(e.target.value))} value={monthSelected} title='Meses'/>
            <SelectInput options={validYears} onChange={(e) => setYearSelected(Number(e.target.value))} value={yearSelected} title='Anos'/>
        </ContentHeader>

        <Filters>
            <button
                type="button"
                ref={(el: HTMLButtonElement) => filterButtons.current[0] = el}
                value="recurrent"
                className={'tag-filter tag-filter-recurrent tag-active'}
                onClick={(e) => handleFilterButtonClick(e.currentTarget.value)}
            >
                Recorrentes
            </button>

            <button
                type="button"
                ref={(el: HTMLButtonElement) => filterButtons.current[1] = el}
                value="sporadic"
                className={'tag-filter tag-filter-eventual tag-active'}
                onClick={(e) => handleFilterButtonClick(e.currentTarget.value)}
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