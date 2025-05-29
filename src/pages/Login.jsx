import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
} from "@mui/material";
import { NavLink } from "react-router";

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4" textAlign="center" mt={8} mb={2} color="text.primary">
        С возвращением!
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary" mb={2}>
        Пожалуйста, войдите, чтобы продолжить работу с системой.
      </Typography>
      <Paper elevation={6} sx={{ p: 4, mt: 8, mb: 8, borderRadius: 4 }}>
        <Typography component="h1" variant="h5" textAlign="center" mb={2}>
          Вход в аккаунт
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
          Добро пожаловать! Войдите, чтобы продолжить работу с вашим аккаунтом и получить доступ ко всем возможностям.
        </Typography>
        <Box component="form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#616161', '&:hover': { backgroundColor: '#424242' } }}
          >
            Войти
          </Button>
          <Box textAlign="center">
            <Typography component='span'>
              Нет аккаунта?{'\n'}
            </Typography>
            <NavLink to="/register" style={{textDecoration: 'none', color: 'GrayText', "&:hover": { color: 'White'}}}>
              <Typography component='span'>
                Зарегистрироваться
              </Typography>
            </NavLink>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;