import React from 'react';
import { Content } from './styles';
import SectionEmoji from '../SectionEmoji';

function SectionSearch({ tone, str, emoji }) {
    return (
        <Content>
            <section className="back-search">
                <ul>
                    <SectionEmoji selected={val => emoji(val)} tone={tone} search={str} />
                </ul>
            </section>
        </Content>
    );
}

export default SectionSearch;