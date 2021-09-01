import React, { useState } from 'react';
import { Content } from './styles';
import { SkinTone } from '../../Emojis/skinTone';

function ChooseSkinTone({callback}) {
    const [skinTone, setSkinTone] = useState(['0x1F44C', '']);
    const [showSkinTone, setShowSkinTone] = useState(false);

    return (
        <Content>
            <button className="btn-skin" type="button" title="cor da pele" onClick={() => setShowSkinTone(!showSkinTone)}>
                <span>{String.fromCodePoint(skinTone[0], skinTone[1])}</span>
            </button>
            {showSkinTone &&
                <ul className="choose-tone">
                    {SkinTone.map(skin => {
                        return (
                            <li key={skin}>
                                <button onClick={() => { 
                                    setSkinTone(['0x1F44C', skin]); 
                                    setShowSkinTone(false); 
                                    callback(skin) 
                                }}>
                                    <span>{String.fromCodePoint('0x1F44C', skin)}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            }
        </Content>
    );
}

export default ChooseSkinTone;