import { Box, Container } from "@mui/material";
import styledComponents from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "../src/components/Header";

function HomePage() {

    const Body = styledComponents.div`
        margin: 0px;
    `;

    const GlobalStyle = createGlobalStyle`
        body {
            margin: 0px;
        }
    `;

    return (
        <>
            <GlobalStyle />
            <Body>
                <Header />
            </Body>
        </>
    );
}

export default HomePage;
