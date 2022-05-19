import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

import { Container } from './styles';

interface IHistoryBoxProps {
    data: {
        month: string;
        entriesAmount: number;
        exitsAmount: number;
    }[],
    lineColorEntriesAmount: string;
    lineColorExitsAmount: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorEntriesAmount, lineColorExitsAmount, 
}) => {
    return (
        <Container>
            <h2>Histórico de saldo</h2>

            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece"/>
                    <XAxis dataKey='month' stroke="#cecece"/>
                    <Tooltip />
                    <Line 
                        type="monotone"
                        dataKey="entriesAmount"
                        name="Saídas"
                        stroke={lineColorEntriesAmount}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                        />
                    <Line
                        type="monotone"
                        dataKey="exitsAmount"
                        name="Saídas"
                        stroke={lineColorExitsAmount}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default HistoryBox;