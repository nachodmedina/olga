import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Layout from "../../src/components/Layout";


function ProductsPage() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <Layout pageName="Productos">
        <Typography paragraph>Productos</Typography>
      </Layout>
    </Box>
  );
}

export default ProductsPage;
