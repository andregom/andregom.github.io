import React from 'react';
import {
    Container,
    Content,
    Filters
} from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import BallanceHistoryCard from '../../components/BallanceHistoryCard';

const List: React.FC = () => {

    const months = [
        {value: 9, label: 'Setembro'},
        {value: 8, label: 'Agosto'},
        {value: 7, label: 'Julho'},    
    ];

    const years = [
        {value: 2022, label: 2022},
        {value: 2021, label: 2021},
        {value: 2020, label: 2020},
        {value: 2019, label: 2019},
        {value: 2018, label: 2018},    
    ];

    return (
    <Container>
        <ContentHeader title="Saídas" lineColor='#F7931B'>
            <SelectInput options={months} />
            <SelectInput options={years} />
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
            <BallanceHistoryCard
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
        </Content>
    </Container>)
}

export default List;