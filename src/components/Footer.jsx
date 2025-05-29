import { Box, Container, SvgIcon, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box component="footer" bgcolor="grey.900" color="white" py={6}>
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <Box display="flex" alignItems="center">
              <SvgIcon sx={{ color: 'grey.400', fontSize: 32 }}>
                <path
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </SvgIcon>
              <Typography variant="h6" ml={2}>
                Life Tracker
              </Typography>
            </Box>
            <Typography variant="body2" color="grey.400" textAlign="center">
              © 2025 Life Tracker. Все права защищены.
            </Typography>
          </Box>
        </Container>
      </Box>
  )
}
