import styled from 'styled-components';

import ToggleCompoenet from '../Toggle';

export const Container = styled.div`
    grid-area: MH;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.secondary};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px;

    border-bottom: 1px solid ${props => props.theme.color.gray};
`;

export const Profile = styled.div`
    color: ${props => props.theme.color.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;

export const Toggle = styled(ToggleCompoenet)`
    background-color: red !important;
    color: red;

    z-index: 1;
`;