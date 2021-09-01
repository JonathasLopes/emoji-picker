import React from 'react';
import { Content } from './styles';
import { SeparedArray, AddRecent } from '../../allFunctions';
import { AllEmojis } from '../../Emojis/allEmojis';

function SectionEmoji({ types, tone, search, selected }) {
    return (
        <Content>
            {SeparedArray(!search ? types.Emojis : AllEmojis.filter(emoji => emoji.title.includes(search.toLowerCase())), 8).map((groupEmoji, index) => {
                return (
                    <li key={index} className="list-emojis">
                        {groupEmoji.map(emoji => {
                            return (
                                <button 
                                    key={emoji.title}
                                    type="button" 
                                    title={emoji.title} 
                                    onClick={val => { 
                                        selected(val.target.innerText); 
                                        AddRecent(emoji) 
                                    }}
                                >
                                    {emoji.hasTone ?
                                        <span>{String.fromCodePoint(emoji.codePoint, tone)}</span>
                                        :
                                        <span>{String.fromCodePoint(emoji.codePoint)}</span>
                                    }
                                </button>
                            );
                        })}
                    </li>
                )
            })}
        </Content>
    );
}

export default SectionEmoji;