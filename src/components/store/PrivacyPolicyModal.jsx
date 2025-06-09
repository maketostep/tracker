// components/PrivacyPolicyModal.jsx
import React from 'react'
import {
  Box,
  Button,
  Modal,
  Typography
} from '@mui/material'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflowY: 'auto'
}

export default function PrivacyPolicyModal({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" mb={2}>
          Политика обработки персональных данных
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
          <p><strong>1. Общие положения</strong><br/>
          Настоящая Политика действует в отношении всей информации, которую сайт Life Tracker может получить о пользователе во время использования.</p>

          <p><strong>2. Какие данные мы собираем</strong><br/>
          ФИО, email, телефон, информация о заказах, IP-адрес, cookies и др.</p>

          <p><strong>3. Цели обработки</strong><br/>
          Обработка заказов, связь с пользователем, маркетинг (с согласия), улучшение сервиса.</p>

          <p><strong>4. Условия хранения и передачи</strong><br/>
          Храним в защищённой среде. Не передаём третьим лицам, кроме случаев по закону.</p>

          <p><strong>5. Права пользователя</strong><br/>
          Запросить, изменить, удалить данные. Отозвать согласие. Подать жалобу.</p>

          <p><strong>6. Контакт</strong><br/>
          Email: support@lifetracker.ru</p>
        </Typography>
      </Box>
    </Modal>
  )
}
