import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import { spacing } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import LoginForm from "../../src/components/Form";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const LoginPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // aquí puedes agregar la lógica de autenticación
        // si el inicio de sesión es exitoso, redirige a la página de inicio
        router.push("/");
    };

    return (
      <Box>
          <AppBar position="fixed" color="secondary" style={{ width: '100%', padding:'0' }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Login
              </Typography>
            </Toolbar>
          </AppBar>
          <DrawerHeader/>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: '100vw',
            height: '80vh',
          }}
        >
          <Paper sx={{ display: "flex", justifyContent:"center", alignItems: "center", }} elevation={12} >
            <Box
              sx={{ maxWidth: '90%' }}>
                <LoginForm />
              {/* <form style={{ marginTop: 3  }} onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  sx={{ marginTop: 3 }}
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    sx={{ marginTop: 3, padding: spacing(2), marginBottom: 3 }}
                    variant="contained"
                    color="secondary"
                    type="submit"
                    size="large"
                  >
                    Log In
                  </Button>
                </Box>
              </form> */}
            </Box>
          </Paper>
        </Box>
      </Box>
    );
};

export default LoginPage;