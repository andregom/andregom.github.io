import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const List: React.FC = () => {

    const options = [
        {value: 'Jardely', label: 'Jardely'},    
        {value: 'Cecília', label: 'Cecília'},
        {value: 'Marcos', label: 'Marcos'},
    ];

    return (<Container>
        <ContentHeader title="Saídas" lineColor='#F7931B'>
            <SelectInput options={options} />
        </ContentHeader>
    </Container>)
}

export default List;