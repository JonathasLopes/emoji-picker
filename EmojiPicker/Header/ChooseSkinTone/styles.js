import styled from 'styled-components';

export const Content = styled.div`
    .btn-skin,
    .choose-tone button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 18px;
        border-radius: 100%;
    }

    .btn-skin span,
    .choose-tone span {
        position: absolute;
        font-size: 20px;
        margin: 0;
    }

    .choose-tone button:hover,
    .btn-skin:hover {
        background-color: ${props => props.theme.colors.button_secondary}
    }

    .choose-tone {
        position: absolute;
        top: 60px;
        right: 40px;
        z-index: 3;
        background-color: ${props => props.theme.colors.background_primary};
        box-shadow: 0px 4px 4px rgba(0,0,0,0.1);
        padding: 5px 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
    }
    
`;