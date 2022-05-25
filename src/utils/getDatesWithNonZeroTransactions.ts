import { IRawData } from '../interfaces/financialTransactionsRaw';
import getMonthName from './getMonthName';


const getDatesWithNonZeroTransactions = (listData: IRawData[], sort = true, fill = false) => {

    var datesWithTransactions: {
        years: {
            value: number,
            months: Set<number>
        }[]
    } = { years: [] };

    listData.forEach(item => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = date.getMonth();

        const isYearNotYetPresentinDatesWithTransactions = !datesWithTransactions.years.some(yearObject => yearObject.value === year)

        if (isYearNotYetPresentinDatesWithTransactions) {
            datesWithTransactions.years.push({ value: year, months: new Set() });

            datesWithTransactions = sort ?
               { years: datesWithTransactions.years.sort((a, b) => (a.value - b.value)) } : 
                datesWithTransactions;

        }

        let currentYear = datesWithTransactions.years.find(e => { return e.value === year });
        if (currentYear) currentYear.months.add(month);
    });

    return datesWithTransactions.years.map(year => {
        return {
            year: {
                value: year.value,
                label: year.value
            },
            months: Array.from(year.months).map(e => {
                return {
                    value: e + 1,
                    label: getMonthName(e)
                }
            })
        }
    });
}

export default getDatesWithNonZeroTransactions;