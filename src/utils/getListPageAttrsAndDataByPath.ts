import * as themes from '../styles/themes';

import gains from '../repositories/gains';
import expenses from '../repositories/expenses';

const getListPageAttrsAndDataByPath = (ballanceListType: string | undefined, currentThemeTitle: string) => {
    
    const currentTheme = currentThemeTitle === 'dark' ? themes.darkTheme : themes.lightTheme;
    if (ballanceListType === 'entry-ballance') {
        return {
            title: 'Entradas',
            lineColor: `${currentTheme.color.info}`,
            data: gains
        };
    } else if (ballanceListType === 'exit-ballance') {
        return {
            title: 'Saídas',
            lineColor: `${currentTheme.color.warning}`,
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