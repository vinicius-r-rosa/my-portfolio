import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Nav = styled.nav<{ scrolled?: boolean }>`
    color: ${({ scrolled, theme }) => (scrolled ? theme.colors.text : theme.colors.primary)};
    background: ${({ scrolled, theme }) => (scrolled ? theme.colors.primaryFaded : theme.colors.background)};
    box-shadow: ${({ scrolled, theme }) => (scrolled ? theme.shadows.black : theme.shadows.none)};

    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(4px)' : 'none')};
    transition:
        background 0.6s ease,
        backdrop-filter 0.6s ease;

    @media (max-width: 426px) {
        display: none;
    }
`

const Title = styled.h1`
    font-size: 1.5rem;
    font-family: monospace;
    font-weight: 100;
    margin: 0 2rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
        transition: color 3s ease;

        &:hover,
        &:active,
        &:focus {
            color: ${({ theme }) => theme.colors.primaryDarker};
            text-decoration: underline;
            text-underline-offset: 5px;
            transition: color 3s ease;
        }
    }
`

const ItemWrapper = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0 2rem;
    color: ${({ theme }) => theme.colors.text};
`

const Item = styled.li`
    list-style-type: none;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
        color: ${({ theme }) => theme.colors.primaryDarker};
        text-decoration: underline;
        text-underline-offset: 5px;
        transition: color 3s ease;
    }

    a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
        transition: color 3s ease;
    }
`

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        setScrolled(window.scrollY > 1)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        // TODO: Add links
        <Nav scrolled={scrolled}>
            <Title>
                <a href="#home">
                    {'<'}Vinicius R Rosa{'/>'}
                </a>
            </Title>
            <ItemWrapper>
                <Item>
                    <a href="#about-me">Sobre mim</a>
                </Item>
                <Item>
                    <a href="#skills">Conhecimentos</a>
                </Item>
                <Item>
                    <a href="#contact-me">Contato</a>
                </Item>
                <Item>
                    <a href="#projects">Projetos</a>
                </Item>
            </ItemWrapper>
        </Nav>
    )
}

export default Navbar
