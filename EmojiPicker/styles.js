import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 375px;
    position: absolute;
    bottom: 40px;
    right: 0;
    z-index: 5;
    overflow: hidden;
    background-color: ${props => props.theme.colors.background_primary};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.1);
    border-radius: 10px;
`;

export const Content = styled.div`
    h3 {
        text-align: center;
        color: ${props => props.theme.colors.text_title};
        padding-bottom: 10px;
    }

    .back-list-scrolling {
        position: relative;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 225px;
    }
`;

export const HeaderEmoji = styled.div`
    margin: 10px 0;
`;

export const EmojiOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .exit button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 20px;
        border-radius: 100%;
    }

    .exit button {
        padding: 10px;
    }
`;