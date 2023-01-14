import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Layout from "../src/components/Layout";

function HomePage() {
    return (
        <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Layout pageName="Home">
                <Typography paragraph>Home</Typography>{" "}
            </Layout>
        </Box>
    );
}

export default HomePage;
