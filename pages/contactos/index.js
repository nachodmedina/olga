import { Box, Container } from "@mui/material";
import styledComponents from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "../../src/components/Header";
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";
import Layout from "../../src/components/Layout";


function ContactsPage() {

    return (
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Layout pageName="Contactos">
          <Typography paragraph>Hello Contacts</Typography>
        </Layout>
      </Box>
    );
}

export default ContactsPage;