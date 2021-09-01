import React from 'react';
import { Content } from './styles';
import Input from '../../../Input';
import { IconSearch } from '../../../../assets/svgs/index';

function SearchEmoji({callback, searching, title, firstTitle, active}) {
    return (
        <Content>
            <Input placeholder="Pesquisar" 
                callbackValue={val => {
                    callback(val); 
                    val.length >= 1 ? searching(true) : searching(false);
                    val.length >= 1 ? title("Pesquisando") : title(firstTitle);
                    val.length >= 1 ? active(0) : active(1);
                }}
            />
            <i className="icon-search">
                <IconSearch width={16} />
            </i>
        </Content>
    );
}

export default SearchEmoji;