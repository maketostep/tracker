import { Box, Button, Container, SvgIcon, Typography } from '@mui/material'
import React, { useState } from 'react'
import PrivacyPolicyModal from './store/PrivacyPolicyModal' // путь скорректируй под структуру проекта
import ConditionsModal from './store/ConditionsModal'

export default function Footer() {
  const [openModal, setOpenModal] = useState(false)

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
            Самозанятый Мкртчян Мартун Вигенович<br />
            ИНН: 263515981755
          </Typography>

          <Typography variant="body2" color="grey.400" textAlign="center">
            Контакт для связи: +7 (962) 405 25 48
          </Typography>

          <Box textAlign="center">
            <Button
              variant="text"
              color="inherit"
              size="small"
              onClick={() => setOpenModal(true)}
              sx={{ textTransform: 'none' }}
            >
              Политика конфиденциальности
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Модалка */}
      <PrivacyPolicyModal open={openModal} handleClose={() => setOpenModal(false)} />
    </Box>
  )
}
