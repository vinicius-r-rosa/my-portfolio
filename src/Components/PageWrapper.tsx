import styled from "styled-components";

const PageWrapperStyle = styled.div`
    width: 80%;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    // align-items: center;


    // background-color: ${({ theme }) => theme.colors.shadeOne};
    background-color: #ff000030;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    transition:
        background-color 0.3s ease,
        color 0.3s ease;
`

const PageWrapper = ({children}) => {
    return (
        <PageWrapperStyle>
            {children}
        </PageWrapperStyle>
    )
}

export default PageWrapper