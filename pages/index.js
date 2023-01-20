import { Box, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Layout from "../src/components/Layout";

const theme = createTheme();

function HomePage() {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Layout pageName="Home">
            <Typography paragraph>Home</Typography>{" "}
          </Layout>
        </Box>
      </ThemeProvider>
    );
}

export default HomePage;
