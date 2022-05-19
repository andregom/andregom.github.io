import allMonths from './allMonthsList';

const getMonthName = (value: number) => {
    return allMonths[value]; 
}

export default getMonthName;