import React from "react"
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
} from "@mui/material"
import { NavLink, useNavigate } from "react-router"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Form from "../components/Form"
import { useDispatch } from "react-redux"
import { setUser } from "../features/auth/userSlice"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = (e, email, password) => {
    e.preventDefault()
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
        navigate("/dashboard")
      })
      .catch(console.error)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Typography
        variant="h4"
        textAlign="center"
        mt={8}
        mb={2}
        color="text.primary"
      >
        С возвращением!
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        color="text.secondary"
        mb={2}
      >
        Пожалуйста, войдите, чтобы продолжить работу с системой.
      </Typography>
      <Paper elevation={6} sx={{ p: 4, mt: 8, mb: 8, borderRadius: 4 }}>
        <Typography component="h1" variant="h5" textAlign="center" mb={2}>
          Вход в аккаунт
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mb={3}
        >
          Добро пожаловать! Войдите, чтобы продолжить работу с вашим аккаунтом и
          получить доступ ко всем возможностям.
        </Typography>
        {/* Form */}
        <Form title={"Войти"} handleClick={handleLogin} />
        <Box textAlign="center">
          <Typography component="span">Нет аккаунта?{"\n"}</Typography>
          <NavLink
            to="/register"
            style={{
              textDecoration: "none",
              color: "GrayText",
              "&:hover": { color: "White" },
            }}
          >
            <Typography component="span">Зарегистрироваться</Typography>
          </NavLink>
        </Box>
      </Paper>
    </Container>
  )
}

export default Login
