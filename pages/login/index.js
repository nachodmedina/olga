import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { spacing } from "@mui/system";

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
      <Box
        sx={{
          backgroundColor: "black",
          width: 'auto',
          display: "flex",
          height: 'auto',
          display: "flex",
          justifyContent: "center",   
          alignItems: "center",
        }}
      >
        <Paper sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "90%",
              maxWidth: 500,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: 0,
            }}
          >
            <form style={{ marginTop: 3 }} onSubmit={handleSubmit}>
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
                  sx={{ marginTop: 3, padding: spacing(2) }}
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  Log In
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    );
};

export default LoginPage;
