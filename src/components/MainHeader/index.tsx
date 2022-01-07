import React, {useMemo} from 'react';
import { sanitize } from 'dompurify';

import emojis from '../../utils/emojis'

import {
    Container,
    Profile,
    Welcome,
    UserName
} from './styles';

const EMOJIS_LIST_SIZE = emojis.length;

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * EMOJIS_LIST_SIZE)
        return emojis[index];
    }, [])
    return (
        <Container>
            <h1>Toggle</h1>

            <Profile>
                <Welcome>Olá, <div dangerouslySetInnerHTML= {{ __html: sanitize(emoji)}} /></Welcome>
                <UserName>André Gomes</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;