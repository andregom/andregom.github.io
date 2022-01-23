import React from 'react';
import {
    Container,
    Content
} from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import BallanceHistoryCard from '../../components/BallanceHistoryCard';

const List: React.FC = () => {

    const options = [
        {value: 'Jardely', label: 'Jardely'},    
        {value: 'Cecília', label: 'Cecília'},
        {value: 'Marcos', label: 'Marcos'},
    ];

    return (
    <Container>
        <ContentHeader title="Saídas" lineColor='#F7931B'>
            <SelectInput options={options} />
        </ContentHeader>
        <Content>
            <BallanceHistoryCard
                cardColor='#313862'
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
            <BallanceHistoryCard
                cardColor='#313862'
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
            <BallanceHistoryCard
                cardColor='#313862'
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
            <BallanceHistoryCard
                cardColor='#313862'
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
            <BallanceHistoryCard
                cardColor='#313862'
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
            <BallanceHistoryCard
                cardColor='#313862'
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
            <BallanceHistoryCard
                cardColor='#313862'
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
            <BallanceHistoryCard
                cardColor='#313862'
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
            <BallanceHistoryCard
                cardColor='#313862'
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
            <BallanceHistoryCard
                cardColor='#313862'
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
            <BallanceHistoryCard
                cardColor='#313862'
                tagColor='#E44C4E'
                title='Conta de Luz'
                subtitle='22/01/2022'
                amount='R$ 100,00'
            />
        </Content>
    </Container>)
}

export default List;