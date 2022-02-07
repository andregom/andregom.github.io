
import React, { useMemo, useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content, Filters } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import BallanceHistoryCard from '../../components/BallanceHistoryCard';

import { IData } from '../../interfaces/financialTransactions';

import getListPageAttrsAndDataByPath from '../../utils/getListPageAttrsAndDataByPath';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import getDatesWithNonZeroTransactions from '../../utils/getDatesWithNonZeroTransactions';

const List: React.FC = () => {
    const filterButtons = useRef<HTMLButtonElement[]>([]);
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
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

    const { type: listType } = useParams();
    
    const pathDependentProps = useMemo(() => {
        return getListPageAttrsAndDataByPath(listType)
    }, [listType]);

    const datesWithTransactions = useMemo(() => {
        return getDatesWithNonZeroTransactions(pathDependentProps.data);
    },[pathDependentProps]);

    const handleFilterButtonClick = (clickedButtonValue: string) => {
        if (clickedButtonValue !== undefined){
            if (clickedButtonValue === 'recurrent' || clickedButtonValue === 'sporadic') {
                handleFrequenceSelector(clickedButtonValue);
            }
        }
    }

    const handleFrequenceSelector = (pressedButtonValue: 'recurrent' | 'sporadic') => {
        const previousSelectedFrequencies = selectedFrequencies;
        selectedFrequencies[pressedButtonValue] = !selectedFrequencies[pressedButtonValue];
        setselectedFrequencies({...selectedFrequencies});
        const selectedButton = filterButtons.current.filter(el => {return el.value === pressedButtonValue})
        selectedButton[0].onmouseleave = (e) => 
        { 
            const tags = selectedButton[0].className.split(' ');
            if (tags.some(el => el === 'tag-active') && !previousSelectedFrequencies[pressedButtonValue]) {
                selectedButton[0].className = tags.filter(item => {
                    return item !== 'tag-active';
                }).join(' ');
            } else {
                selectedButton[0].className += ' tag-active';
            }
        }
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
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());
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
            <SelectInput options={validMonths} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} value={monthSelected} />
            <SelectInput options={validYears} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} value={yearSelected} />
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