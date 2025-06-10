import React, { useState } from "react"
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
import Form from "../components/Form"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useDispatch } from "react-redux"
import { setUser } from "../features/auth/userSlice"
import ErrorAlert from "../components/ErrorAlert"

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showError, setShowError] = useState(false)
  const handleRegister = (e, email, password) => {
    e.preventDefault()
    setShowError(false)
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch((error) => setShowError(error.code))
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
        Добро пожаловать!
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        color="text.secondary"
        mb={2}
      >
        Заполните форму ниже, чтобы создать новый аккаунт и начать пользоваться
        всеми функциями.
      </Typography>
      <ErrorAlert code={showError} />
      <Paper elevation={6} sx={{ p: 4, mt: 8, mb: 8, borderRadius: 4 }}>
        <Typography component="h1" variant="h5" textAlign="center" mb={2}>
          Регистрация
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mb={3}
        >
          Создайте новый аккаунт, чтобы начать пользоваться всеми функциями
          нашего сервиса. Это быстро и просто!
        </Typography>
        <Form title={"Зарегистрироваться"} handleClick={handleRegister} />
        <Box textAlign="center">
          <Typography component="span">Уже есть аккаунт? {"\n"}</Typography>
          <NavLink
            to="/login"
            style={{
              textDecoration: "none",
              color: "GrayText",
              "&:hover": { color: "White" },
            }}
          >
            <Typography component="span">Войти</Typography>
          </NavLink>
        </Box>
      </Paper>
    </Container>
  )
}

export default Register
