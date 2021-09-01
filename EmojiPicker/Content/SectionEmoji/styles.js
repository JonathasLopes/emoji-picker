import styled from 'styled-components';

export const Content = styled.div`
    .list-emojis {
        display: flex;
    }

    .list-emojis button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin: 16px;
        transition: .1s;
        z-index: 2;
    }

    .list-emojis button span {
        position: absolute;
        font-size: 20px;
        margin: 0;
    }

    .list-emojis button:hover {
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -o-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
    }
`;