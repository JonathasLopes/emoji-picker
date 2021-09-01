import React from 'react';
import { Content } from './styles';
import { TypesEmojis } from '../../Emojis/typesEmojis';
import SectionEmoji from '../SectionEmoji';

function SectionType({skinTone, emoji}) {
    return (
        <Content>
            {TypesEmojis.map(type => {
                return (
                    <section key={type.id} className="back-list" id={type.title}>
                        <p>{type.title}</p>
                        <ul>
                            <SectionEmoji selected={val => emoji(val)} types={type} tone={skinTone}/>
                        </ul>
                    </section>
                )
            })}
        </Content>
    );
}

export default SectionType;