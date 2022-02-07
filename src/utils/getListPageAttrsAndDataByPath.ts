import gains from '../repositories/gains';
import expenses from '../repositories/expenses';

const getListPageAttrsAndDataByPath = (ballanceListType: string | undefined) => {
    if (ballanceListType === 'entry-ballance') {
        return {
            title: 'Entradas',
            lineColor: '#F7931B',
            data: gains
        };
    } else if (ballanceListType === 'exit-ballance') {
        return {
            title: 'Saídas',
            lineColor: '#E44C4E',
            data: expenses
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