import { Box, Container } from "@mui/material";
import styledComponents from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "../src/components/Header";
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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
        <Box sx={{flexGrow: 1, display: 'flex'}}>
            <GlobalStyle />
            <Header />
            <Main>
                <DrawerHeader />
                <Typography paragraph>
                    Hello Word
                </Typography>
            </Main>
        </Box>
    );
}

export default HomePage;
