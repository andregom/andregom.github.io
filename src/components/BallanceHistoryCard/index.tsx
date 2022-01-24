import React from 'react';

import {
    Container,
    Tag
} from './slyles';

interface BallanceHistoryCardProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const BallanceHistoryCard: React.FC<BallanceHistoryCardProps> = ({
    tagColor,
    title,
    subtitle,
    amount
}) => {
    return (
        <Container>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );
}

export default BallanceHistoryCard