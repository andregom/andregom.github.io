import gains from '../repositories/gains';
import expenses from '../repositories/expenses';

const getListPageAttrsAndDataByPath = (ballanceListType: string | undefined) => {
    if (ballanceListType === 'entry-ballance') {
        return {
            title: 'Entradas',
            lineColor: '#4E41F0',
            data: gains
        };
    } else if (ballanceListType === 'exit-ballance') {
        return {
            title: 'Saídas',
            lineColor: '#E44C4E',
            data: expenses
        };
    } else if (ballanceListType === 'all') {
        return {
            title: 'Todas',
            lineColor: '#F5F5F5',
            data: [...gains, ...expenses]
        };
    } else {
        return {
            title: 'Not a valid address',
            lineColor: 'red',
            data: []
        };
    }
}

export default getListPageAttrsAndDataByPath;