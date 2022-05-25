import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import memoize from "fast-memoize";

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import { IRawData } from '../../interfaces/financialTransactionsRaw';

import getDatesWithNonZeroTransactions from '../../utils/getDatesWithNonZeroTransactions';
import getListPageAttrsAndDataByPath from '../../utils/getListPageAttrsAndDataByPath';
import allMonths from '../../utils/allMonthsList';
import fillWithNonTransactionDates from '../../utils/fillNonTransactionValues';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';

import {
    Container,
    Content
} from './styles';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import PieChartComponent from '../../components/PieChart';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [validMonths, setValidMonths] = useState<{
        value: string | number;
        label: string | number;
    }[]>([]);
    const [validYears, setValidYears] = useState<{
        value: string | number;
        label: string | number;
        empty: boolean
    }[]>([]);

    const listType = "all";

    const pathDependentProps = useMemo(() => {
        return getListPageAttrsAndDataByPath(listType)
    }, [listType]);

    const datesWithTransactions = useMemo(() => {
        return getDatesWithNonZeroTransactions(pathDependentProps.data);
    }, [pathDependentProps]);

    useEffect(() => {
        const currentValidMonths = datesWithTransactions.find(e => {
            return e.year.value === Number(yearSelected);
        })?.months

        if (currentValidMonths !== undefined) setValidMonths(currentValidMonths);
        else setValidMonths([]);
    }, [datesWithTransactions, yearSelected, listType]);

    useEffect(() => {
        const validYears = datesWithTransactions.map(dates => dates.year);
        const allDatesWithinThePeriod = fillWithNonTransactionDates(datesWithTransactions);
        const labeledEmptyAndNotEmptyYears = allDatesWithinThePeriod.map(dates => dates.year);

        setValidYears(labeledEmptyAndNotEmptyYears);
    }, [datesWithTransactions, listType]);

    useLayoutEffect(() => {
        if (validYears.length > 0) {
            if (!validYears.some(month => month.value == yearSelected))
                setYearSelected(Number(validYears[0].value));
        }
    }, [validYears, datesWithTransactions, listType, yearSelected]);

    useEffect(() => {
        if (validMonths.length > 0) {
            if (!validMonths.some(month => month.value == monthSelected))
                setMonthSelected(Number(validMonths[0].value));
        }
    }, [yearSelected, validMonths]);

    const totalSum = useMemo(() => memoize((listOfTransactions) => {
        let total: number = 0;

        listOfTransactions.forEach((item: IRawData) => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month == monthSelected && year == yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('Invalid amount! Not a valid number.')
                }
            }
        })


        return total;
    }), [yearSelected, monthSelected]);

    const accumulatedBallancesPerMonth = useMemo(() => memoize((listOfTransactions, month, year) => {
        let accumulatedAmount = 0;
        listOfTransactions.forEach((transaction: IRawData) => {
            const date = new Date(transaction.date);
            const transactionMonth = date.getMonth();
            const transactionYear = date.getFullYear();

            if (transactionMonth === month && transactionYear === year) {
                try {
                    accumulatedAmount += Number(transaction.amount);
                } catch (error) {
                    throw new Error('entriesAmount is Invalid. It must be a valid number.')
                }
            }
        });

        return accumulatedAmount;
    }), []);

    const historyData = useMemo(() => {
        return allMonths.map((_, month) => {
            return {
                monthNumber: month,
                month: allMonths[month].substring(0, 3),
                entriesAmount: accumulatedBallancesPerMonth(gains, month, yearSelected),
                exitsAmount: accumulatedBallancesPerMonth(expenses, month, yearSelected)
            }
        }).filter((item: any) => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || yearSelected != currentYear;
        })
    }, [yearSelected]);

    const relationExpensesRecurrentVsEventual = useMemo(() => memoize((gains = undefined, expeneses = undefined) => {
        let transactions = gains ? gains : [];
        transactions = expeneses ? expeneses : transactions;
        let recurrentAmount = 0;
        let eventualAmount = 0;

        transactions
            .filter((expense: IRawData) => {
                const date = new Date(expense.date);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;

                return month === monthSelected && year === yearSelected;
            })
            .forEach((expense: IRawData) => {
                if (expense.frequency === 'recorrente') {
                    return recurrentAmount += Number(expense.amount);
                }

                if (expense.frequency === 'eventual') {
                    return eventualAmount += Number(expense.amount);
                }
            });

        const total = recurrentAmount + eventualAmount;

        const isRecurrentAmountZero = recurrentAmount === 0;
        const recurrentPercentage = isRecurrentAmountZero ? 0
            : ((recurrentAmount / total) * 100);

        const isEventualAmountZero = eventualAmount === 0;
        const eventualPercentage = isEventualAmountZero ? 0
            : ((eventualAmount / total) * 100);

        return [
            {
                name: 'Recorrentes',
                amount: recurrentAmount,
                percent: Number(recurrentPercentage.toFixed(1)),
                color: "#F7931B"
            },
            {
                name: 'Eventuais',
                amount: eventualAmount,
                percent: Number(eventualPercentage.toFixed(1)),
                color: "#E44C4E"
            }
        ];
    }), [yearSelected, monthSelected]);

    const accumulated = useMemo(() => {
        return {
            gains: totalSum(gains),
            expenses: totalSum(expenses)
        }
    }, [totalSum(gains), totalSum(expenses)]);

    const totalBallance = useMemo(() => {
        return accumulated.gains - accumulated.expenses;
    }, [accumulated]);

    const message = useMemo(() => {
        if (totalBallance < 0) {
            return {
                title: "Que pena!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e tente cortar o que for desnecessário.",
                icon: sadImg
            }
        }
        else if (totalBallance == 0) {
            return {
                title: "Ufa!",
                description: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado para não ficar no vermelho!.",
                icon: grinningImg
            }
        }
        else {
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyImg
            }
        }
    }, [totalBallance]);

    const realationExpensesVersusGains = useMemo(() => {
        const total = accumulated.gains + accumulated.expenses

        const gainsPercent = (accumulated.gains / total) * 100;
        const expensesPercent = (accumulated.expenses / total) * 100;

        const data = [
            {
                name: "Entradas",
                value: accumulated.gains,
                percent: Number(gainsPercent.toFixed(1)),
                color: "#F7931B"
            },
            {
                name: "Saídas",
                value: accumulated.expenses,
                percent: Number(expensesPercent.toFixed(1)),
                color: "#E44C4E"
            }
        ];

        return data;
    }, [accumulated]);

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor='#F7931B'>
                <SelectInput
                    options={validMonths}
                    onChange={(e) =>
                        setMonthSelected(Number(e.target.value))}
                    value={monthSelected} />
                    
                <SelectInput
                    options={validYears}
                    onChange={(e) =>
                        setYearSelected(Number(e.target.value))}
                    value={yearSelected} />
            </ContentHeader>

            <Content>
                <WalletBox
                    title="saldo"
                    amount={totalBallance}
                    footerLabel="atualizado com base nas entradas e saídas"
                    icon="dolar"
                    color="#4E41F0"
                />

                <WalletBox
                    title="entradas"
                    amount={totalSum(gains)}
                    footerLabel="atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#F7931B"
                />

                <WalletBox
                    title="saídas"
                    amount={totalSum(expenses)}
                    footerLabel="atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#E44C4E"
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChartComponent data={realationExpensesVersusGains} />

                <HistoryBox
                    data={historyData}
                    lineColorEntries="#F7931B"
                    lineColorExits="#E44C4E"
                />

                <BarChartBox
                    title="Entradas"
                    data={relationExpensesRecurrentVsEventual(gains)}
                />

                <BarChartBox
                    title="Saídas"
                    data={relationExpensesRecurrentVsEventual(expenses)}
                />
            </Content>
        </Container>
    )
}

export default Dashboard;