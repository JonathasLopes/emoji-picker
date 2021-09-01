import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 5px;
    background-color: ${props => props.theme.colors.background_secondary};

    .types-emoji button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 14px;
        margin: 0 4px;
        border-radius: 100%;
        cursor: pointer;
        filter: grayscale(100%);
        transition: .2s;
    }

    .types-emoji button span {
        position: absolute;
        font-size: 15px;
        margin: 0;
    }

    .types-emoji button.active,
    .types-emoji button:hover {
        filter: grayscale(0%);
        background-color: ${props => props.theme.colors.button_secondary}
    }

`;