import { AppBar, Box, Button, Stack, SvgIcon, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router';

export default function Header() {
  return (
      <AppBar position="static" elevation={1} sx={{ bgcolor: 'grey.100', color: 'grey.900' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <SvgIcon sx={{ color: 'grey.800', fontSize: 32 }}>
              <path
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </SvgIcon>
            <Typography variant="h6" fontWeight="bold" ml={2}>
              Трекер задач
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="inherit" component={RouterLink} to="/login">
              Войти
            </Button>
            <Button variant="contained" sx={{ bgcolor: 'grey.800', '&:hover': { bgcolor: 'grey.700' } }} component={RouterLink} to="/register">
              Регистрация
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
  )
}
