interface IDatesWithTransactions {
    year: {
        value: number;
        label: number;
    };
    months: {
        value: number;
        label: string;
    }[];
};

const fillWithNonTransactionDates = (datesWithTransactions: IDatesWithTransactions[]) => {

    const firstNonEmptyYear = datesWithTransactions[0].year.value;
    const lastNonEmptyYear = datesWithTransactions.slice(-1)[0].year.value;
    const allDatesWithinThePeriod = [];

    for (var year = firstNonEmptyYear; year >= lastNonEmptyYear; year--) {
        const notEmptYear = datesWithTransactions.find(e => { return e.year.value === year });
        const empty = notEmptYear ? false : true;

        const dateObject =
            notEmptYear ? {
                year: {
                    value: notEmptYear.year.value,
                    label: notEmptYear.year.label,
                    empty: empty
                },
                months: notEmptYear.months
            } : {
                year: {
                    value: year,
                    label: year,
                    empty: empty
                },
                months: []
            }

        allDatesWithinThePeriod.push(dateObject);
    }
    return allDatesWithinThePeriod;
}

export default fillWithNonTransactionDates;