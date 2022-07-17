import styled from "styled-components";

interface ILegendProps {
    color: string
};

export const Container = styled.div`
    width: 100%;
    height: 360px;
    
    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};
    
    margin: 10px 0;
    padding: 30px 20px;
    
    border-radius: 7px;
    
    @media (max-width: 1280px) {
        height: max-content;
    }
`;

export const ChartContainer = styled.div`
    flex: 1;
    height: 260px;
`;

export const Header = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 17px;
    }

    @media (max-width: 430px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    
    display: flex;
    padding-right: 17px;
    
    @media (max-width: 430px) {
        padding-left: 10px;
        padding-bottom: 10px;
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    
    margin-bottom: 7px;
    margin-left: 7px;
    padding-right: 10px;

    
    > div {
        background-color: ${props => props.color};
        
        width: 45px;
        height: 40px;
        border-radius: 5px;
        
        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }
    
    > span {
        margin-left: 5px;
    }
`;
