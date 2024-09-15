import { ReactNode } from "react";
import styled from "styled-components";

const PageWrapperStyle = styled.div`
    width: 80%;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    TODO: Change the background-color for the right color after tests
    // background-color: ${({ theme }) => theme.colors.shadeOne};
    background-color: #ff000030;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    transition:
        background-color 0.3s ease,
        color 0.3s ease;
`

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({children}) => {
    return (
        <PageWrapperStyle>
            {children}
        </PageWrapperStyle>
    )
}

export default PageWrapper