import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button, TextField } from '@mui/material';
import { Box, spacing } from '@mui/system';
import * as Yup from 'yup';

const LoginForm = () => {
    const route = useRouter()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const validationSchema = Yup.object().shape({
        userName: Yup.string()
            .required('El nombre de usuario es obligatorio')
            .min(3, 'El nombre de usuario debe tener al menos 3 caracteres'),
        password: Yup.string()
            .required('La contraseña es obligatoria')
            .min(8, 'La contraseña debe tener al menos 8 caracteres'),
    });

    const handleSubmit = (values) => {
        axios.get(`http://localhost:3001/users/${values.userName}`)
            .then(response => {
                // Aquí puedes manejar la respuesta de la petición y realizar el matcheo de contraseña
                const user = response.data;
                console.log('user: ', user)
                if (!user) {
                    setError("Usuario no encontrado");
                    return;
                }
                if (user.password !== values.password) {
                    setError("Contraseña incorrecta");
                    return;
                }
                // Si el usuario y la contraseña son correctos, puedes realizar el login
                setError(null);
                setUsername(user.username);
                setPassword(user.password);
                //Redirigir a otra pagina o hacer algo mas
                route.push("/")
            })
            .catch(error => {
                setError("Error al conectar con el servidor");
                console.log(error);
            });
    }

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        onSubmit: (values) => {
            handleSubmit(values);
        },
        validationSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {/* <label htmlFor="userName">Username</label>
            <input
                id="userName"
                name="userName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userName}
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Submit</button> */}
            <TextField
                label="Username"
                value={formik.values.userName}
                onChange={formik.handleChange}
                id="userName"
                name="userName"
                type="text"
                fullWidth
                margin="normal"
                variant="outlined"
            />

            {formik.errors.userName && <div>{formik.errors.userName}</div>}
            <TextField
                sx={{ marginTop: 3 }}
                label="Password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            {formik.errors.password && <div>{formik.errors.password}</div>}
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
    );
};

export default LoginForm;
