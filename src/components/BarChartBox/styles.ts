import styled from 'styled-components';

interface ILegendProps {
    color: string
};

export const Container = styled.div`
    width: 48%;
    min-height: 260px;
    min-width: 160px;

    margin: 10px 0;

    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};

    border-radius: 7px;

    display: flex;
    flex-wrap: wrap;
`;

export const SideLeft = styled.aside`
    flex: 1;
    padding: 30px 20px;
    
    > h2 {
        padding-left: 17px;
        margin-bottom: 10px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    height: 170px;
    padding-right: 12px;
    overflow-y: scroll;
    `;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: bottom;
    align-items: center;
    min-width: min-content;
    
    margin-bottom: 7px;
    padding-left: 17px;
    
    > div {
        background-color: ${props => props.color};
        
        width: 45px;
        height: 40px;
        border-radius: 5px;
        
        font-size: 14px;
        line-height: 40px;
        text-align: center;

        margin-right: 5px;
    }
    
    > span {
    }
`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 150px;
    max-height: min-content;
    min-width: 40%;
    width: max-content;
    overflow-x: auto;

    display: flex;
    justify-content: center;
`;