import styled, { css } from 'styled-components';

interface IContainerProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.color.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.color.gray};

    position: relative;

    @media (max-width: 600px) {
        padding-left: 7px;
         position: fixed;
        z-index: 2;

        width: 170px;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.color.gray};
        `};
    }

    @media (max-width: 800px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        
        width: 230px;
        
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;
        
        ${props => !props.menuIsOpen && css`
        border: none;
        border-bottom: 1px solid ${props => props.theme.color.gray};
        `};
    }
    
    @media (max-width: 600px) {
        width: 170px;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;
export const LogImg = styled.img`
    height: 40px;
    width: 40px;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.color.white};
    margin-left: 10px;

    @media (max-width: 600px) {
        display: none ;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    > * {
        text-decoration: none;
    }
`;

export const MenuItemLink = styled.div`
    color: ${props => props.theme.color.info};
    padding: 2px;
    text-decoration: none; 
    margin: 7px 0;
    display: flex;
    align-items: center;
    transition: opacity .3s;
    &:hover {
        opacity: .5;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    display: flex;

    width: 40px;
    height: 40px;

    align-items: center;
    justify-content: center;

    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.color.warning};
    color: ${props => props.theme.color.white};

    transition: opacity .3s;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }

    @media (min-width: 800px) {
        display: none;
    }
`;