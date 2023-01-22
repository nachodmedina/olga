import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { spacing } from "@mui/system";
 import { Formik } from "formik";

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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          elevation={12}
        >
          <Box sx={{ maxWidth: "90%" }}>
            <form style={{ marginTop: 3 }} onSubmit={handleSubmit}>
              <TextField
                label="Username"
                defaultValue={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                sx={{ marginTop: 3 }}
                label="Password"
                type="password"
                defaultValue={password}
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
            </form>
          </Box>
        </Paper>
      </Box>
    );
};

export default LoginPage;
