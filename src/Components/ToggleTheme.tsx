import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../Contexts/ThemeContext';

const ToggleThemeBtnOverlay = styled.div`
    position: fixed;
    bottom: 20px;
    left: 30px;
    z-index: 1000;
`;

const Button = styled.button`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: none;
    background-color: darkgray;

    &:hover {
        border: none;
        scale: 1.1;
        background-color: gray;
    }
`;

const LightBtn = styled(Button)``;

const DarkBtn = styled(Button)``;

const ToggleThemeBtn: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    const { theme, toggleTheme } = themeContext;

    return (
        <ToggleThemeBtnOverlay>
            {/* TODO: Alterar de emoji para ícone com React Icons ou custom SVG */}
            {theme === 'light' ? (
                <LightBtn title="Alterar para modo escuro" onClick={toggleTheme}>
                    🌙
                </LightBtn>
            ) : (
                <DarkBtn title="Alterar para modo claro" onClick={toggleTheme}>
                    🌞
                </DarkBtn>
            )}
        </ToggleThemeBtnOverlay>
    );
};

export default ToggleThemeBtn;
