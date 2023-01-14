import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Layout from "../../src/components/Layout";

function SalesPage() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <Layout pageName="Sales">
        <Typography paragraph>Sales</Typography>{" "}
      </Layout>
    </Box>
  );
}

export default SalesPage;
