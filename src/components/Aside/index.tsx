import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md';
import logoImg from '../../assets/logo.svg';
import {
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    ToggleMenu
} from './styles';

const Aside: React.FC = () => {
    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
                </ToggleMenu>

                <LogImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <Link to="/dashboard">
                    <MenuItemLink>
                        <MdDashboard />
                        Dashboard
                    </MenuItemLink>
                </Link>
                <Link to="/list/entry-ballance">
                    <MenuItemLink>
                        <MdArrowUpward />
                        Entradas
                    </MenuItemLink>
                </Link>
                <Link to="/list/exit-ballance">
                    <MenuItemLink>
                        <MdArrowDownward />
                        Saídas
                    </MenuItemLink>
                </Link>
                <Link to="#">
                    <MenuItemLink>
                        <MdExitToApp />
                        Sair
                    </MenuItemLink>
                </Link>
            </MenuContainer>
        </Container>
    )
}

export default Aside;