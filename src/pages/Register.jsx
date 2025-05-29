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


const Register = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4" textAlign="center" mt={8} mb={2} color="text.primary">
        Добро пожаловать!
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary" mb={2}>
        Заполните форму ниже, чтобы создать новый аккаунт и начать пользоваться всеми функциями.
      </Typography>
      <Paper elevation={6} sx={{ p: 4, mt: 8, mb: 8, borderRadius: 4 }}>
        <Typography component="h1" variant="h5" textAlign="center" mb={2}>
          Регистрация
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
          Создайте новый аккаунт, чтобы начать пользоваться всеми функциями нашего сервиса. Это быстро и просто!
        </Typography>
        <Box component="form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Имя"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#616161', '&:hover': { backgroundColor: '#424242' } }}
          >
            
            Зарегистрироваться
          </Button>
          <Box textAlign="center">
            <Typography component='span'>Уже есть аккаунт? {'\n'}</Typography>
            <NavLink to="/login" style={{textDecoration: 'none', color: 'GrayText', "&:hover": { color: 'White'}}}>
            <Typography component='span'>
              Войти
              </Typography>
            </NavLink>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
