import React, { useEffect, useState } from 'react';
import { Content } from './styles';
import { AutoScroll } from '../../allFunctions';
import { TypesEmojis } from '../../Emojis/typesEmojis';

function NavBarTypes({idActive, newTitle, searching}) {
    const [isActive, setIsActive] = useState(1);

    useEffect(() => {
        setIsActive(idActive);
    }, [idActive]);

    return (
        <Content>
            {TypesEmojis.map(type => {
                return (
                    <div key={type.id} className="types-emoji">
                        <button
                            disabled={searching ? true : false}
                            type="button"
                            className={isActive === type.id ? 'active' : undefined}
                            onClick={() => {AutoScroll(type.title, type.id, setIsActive); newTitle(type.title)}}
                        >
                            <span>{String.fromCodePoint(type.icon)}</span>
                        </button>
                    </div>
                )
            })}
        </Content>
    );
}

export default NavBarTypes;