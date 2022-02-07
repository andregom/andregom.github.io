const formatDate = (date: string): string => {
    const dateFormatted = new Date(date);
    const day = addFillingDigit(0, dateFormatted.getDate() + 1);
    const month = addFillingDigit(0, dateFormatted.getMonth() + 1);
    const year = addFillingDigit(0, dateFormatted.getFullYear());

    return `${day}/${month}/${year}`;
}

const addFillingDigit = (digit: number, value: number): string => {
    if (isOneDigit(value)) {
        return `0${value}`;
    }
    return `${value}`;
}

const isOneDigit = (value: number): boolean => { return value <= 9 }

export default formatDate;