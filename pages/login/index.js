import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, spacing } from '@mui/system';
import { useRouter } from 'next/router'
import Paper from '@mui/material/Paper';

const theme = createTheme();


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: spacing(1),
        width: '25ch'
      },
      '& .MuiButton-root': {
        margin: spacing(1)
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    paper: {
        width: '500px',
        height: '250px',
        padding: spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      form: {
        width: '80%',
        marginTop: spacing(1)
      },
      submit: {
        margin: spacing(3, 0, 2),
        padding: spacing(2), /* aumenta el tamaño del botón */
        fontSize: '1rem' /* aumenta el tamaño de la letra */
      },
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      },
      formContainer: {
        width: '90%',  /* ajusta el ancho del contenedor */
        maxWidth: '500px', /* establece un ancho máximo */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto'
      },
      password:{
        marginBottom: spacing(6),
      }
  }))

const LoginPage = () => {
  const classes = useStyles()
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // aquí puedes agregar la lógica de autenticación
    // si el inicio de sesión es exitoso, redirige a la página de inicio
    router.push('/')
  }

  return (
    <Box className={classes.center}>
        <Paper className={classes.paper}>
            <Box className={classes.formContainer}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <Button
                        className={classes.submit}
                        variant="contained"
                        color="secondary"
                        type="submit"
                        fullWidth
                    >
                        Log In
                    </Button>
                </form>
            </Box>
        </Paper>
    </Box>
  )
}

export default LoginPage