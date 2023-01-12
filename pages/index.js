import { Box, Container } from "@mui/material";
import styledComponents from "styled-components";
import dynamic from "next/dynamic";

function HomePage() {
  const Body = styledComponents.body`
    margin: 0px;
    `;

    const Header = dynamic(() => import("../src/components/Header"), {
      ssr: false,
    });
  return (
    <Body>
        <Header />
    </Body>
  );
}

export default HomePage;
