import React, { useState } from 'react';
import { Container, Content, HeaderEmoji, EmojiOptions } from './styles';
import { TypesEmojis } from './Emojis/typesEmojis';
import ChooseSkinTone from './Header/ChooseSkinTone';
import NavBarTypes from './Header/NavBarTypes';
import SearchEmoji from './Header/SearchEmoji';
import SectionType from './Content/SectionType';
import { CheckScroll } from './allFunctions';
import SectionSearch from './Content/SectionSearch';
import { CloseLight } from '../../assets/svgs/index';

function EmojiPicker({ toggleClose, emojiSelected }) {
    const [searchEmoji, setSearchEmoji] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [isActive, setIsActive] = useState(1);
    const [typeTone, setTypeTone] = useState('');
    const [titleSection, setTitleSection] = useState(TypesEmojis[0].title);

    return (
        <Container>
            <HeaderEmoji>
                <EmojiOptions>
                    <SearchEmoji
                        callback={val => setSearchEmoji(val)}
                        searching={val => setIsSearching(val)}
                        title={val => setTitleSection(val)}
                        active={val => setIsActive(val)}
                        firstTitle={TypesEmojis[0].title}
                    />

                    <ChooseSkinTone callback={val => setTypeTone(val)} />

                    <div className="exit" onClick={() => toggleClose(false)}>
                        <button type="button" >
                            <CloseLight width={10} />
                        </button>
                    </div>

                </EmojiOptions>

                <NavBarTypes
                    idActive={isActive}
                    inputSearch={val => setSearchEmoji(val)}
                    searching={isSearching}
                    newTitle={val => setTitleSection(val)}
                />

            </HeaderEmoji>
            <Content>
                <div className="container-Emojis">
                    <h3 id="name-of-section">{titleSection}</h3>
                    <section
                        id="scrolling"
                        className="back-list-scrolling"
                        onScroll={(e) => !searchEmoji && CheckScroll(e, titleSection, setTitleSection, setIsActive)}
                    >
                        {searchEmoji === '' ?
                            <SectionType emoji={val => emojiSelected(val)} skinTone={typeTone} />
                            :
                            <SectionSearch emoji={val => emojiSelected(val)} tone={typeTone} str={searchEmoji} />
                        }
                    </section>
                </div>
            </Content>
        </Container >
    );
}

export default EmojiPicker;