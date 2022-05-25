import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

import formatCurrency from '../../utils/formatting/formatCurrency';

import {
    Container,
    ChartContainer,
    Header,
    Legend,
    LegendContainer
 } from './styles';

interface IHistoryBoxProps {
    data: {
        month: string;
        entriesAmount: number;
        exitsAmount: number;
    }[],
    lineColorEntries: string;
    lineColorExits: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorEntries, lineColorExits, 
}) => {
    return (
        <Container>
            <Header>
                <h2>Histórico de saldo</h2>

                <LegendContainer>
                    <Legend color={lineColorEntries}>
                        <div>50%</div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color={lineColorExits}>
                        <div>50%</div>
                        <span>Saídas</span>
                    </Legend>
                </LegendContainer>
            </Header>
            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#cecece"/>
                        <XAxis dataKey='month' stroke="#cecece"/>
                        <Tooltip formatter={(value: any) => formatCurrency(Number(value))}/>
                        <Line 
                            type="monotone"
                            dataKey="entriesAmount"
                            name="Entradas"
                            stroke={lineColorEntries}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                            />
                        <Line
                            type="monotone"
                            dataKey="exitsAmount"
                            name="Saídas"
                            stroke={lineColorExits}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    )
}

export default HistoryBox;