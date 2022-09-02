import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const theme = createTheme();
export default function Login() {
    const [passwordType, setPasswordType] = useState('password')

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),
        // });
        const formData = {
            ...{
                email: data.get('email'),
                password: data.get('password')
            }
        }
        try{

            axios.get(`http://localhost:3000/Users?email=${formData.email}&&password=${formData.password}`).then((res) => {
                if((res.data).length === 1) navigate('/dashboard',{replace:true})
            }).catch((err) => console.log(err))

        }catch(e){
            console.log(e)
        }

    };
    function handleToggle() {
        if (passwordType === 'password') setPasswordType('text')
        else setPasswordType('password')
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CssBaseline />
                <Paper elevation={3} sx={{px:4,pb:1}}>
                    <Box>
                        {/* <Avatar sx={{ my: 2, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar> */}
                        <Typography component="h1" variant="h5" sx={{pt:2,fontWeight:700}}>
                            SIGN-IN
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{py:3 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={passwordType}
                                        id="password"
                                        autoComplete="new-password"
                                        InputProps={{ endAdornment: <Button variant='text' onClick={handleToggle} >{passwordType === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}</Button> }}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt:3}}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}