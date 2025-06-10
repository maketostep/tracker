import {
  AppBar,
  Box,
  Button,
  Stack,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material"
import React from "react"
import { NavLink, Link as RouterLink, useNavigate } from "react-router"
import { useAuth } from "../hooks/use-auth"
import { removeUser } from "../features/auth/userSlice"
import { useDispatch } from "react-redux"

const isMobile = window.matchMedia("(max-width: 768px)").matches

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth, email } = useAuth()
  const handleExit = () => {
    dispatch(removeUser())
    navigate("/")
  }
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        bgcolor: "grey.100",
        color: "grey.900",
        opacity: "0.7",
        ":hover": { opacity: "1" },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <SvgIcon sx={{ color: "grey.800", fontSize: 32 }}>
            <path
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </SvgIcon>
          <Typography
            variant="h6"
            fontWeight="bold"
            ml={2}
            component={NavLink}
            to="/"
            sx={{ textDecoration: "none", color: "black" }}
          >
            Life Tracker
          </Typography>{" "}
          <Typography variant="span" fontStyle="italic" sx={{ padding: 2 }}>
            v. 0.0.2
          </Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          {isAuth ? (
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6" ml={2} fontWeight="bold">
                {email}
              </Typography>
              <Button onClick={handleExit} color="inherit">
                Выход
              </Button>
            </Box>
          ) : isMobile ? (
            <>
              <Button
                variant="outlined"
                color="inherit"
                component={NavLink}
                to="/login"
              >
                Авторизация
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                color="inherit"
                component={NavLink}
                to="/login"
              >
                Войти
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "grey.800",
                  "&:hover": { bgcolor: "grey.700" },
                }}
                component={RouterLink}
                to="/register"
              >
                Регистрация
              </Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
