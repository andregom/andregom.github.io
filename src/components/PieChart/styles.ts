import styled from "styled-components";

interface ILegendProps {
    color: string
};

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};

    border-radius: 7px;

    display: flex;

    overflow: auto;

    @media (max-width: 770px) {
        display: flex;
        width: 100%;
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }

    @media (max-width: 430px) {
        padding: 0 15px 5px;
        margin-bottom: 7px;
        
        > h2 {
            margin-top: 15px;
            margin-bottom: 7px;;
        }
    }

    @media (max-width: 420px) {
        padding: 15px;
        margin-bottom: 7px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    
    height: 170px;
    padding-right: 12px;
    overflow: hidden;

    @media (max-width: 430px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    
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

    @media (max-width: 430px) {
        font-size:14px;
        margin:3px 0;

        > div {
            height: 35px;
            width: 35px;
            line-height: 35px;
        }

        >span {
            margin-left: 7px;
        }
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 430px) {
        height: 100%;
    }
`;