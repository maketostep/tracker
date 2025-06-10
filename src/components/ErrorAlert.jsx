import { useEffect, useState } from "react"
import { Snackbar, Alert } from "@mui/material"

// Сопоставление кодов ошибок Firebase с пользовательскими сообщениями
const ERROR_MESSAGES = {
  "auth/invalid-credential":
    "Неверные учетные данные. Проверьте email и пароль.",
  "auth/email-already-exists": "Этот email уже зарегистрирован.",
  "auth/invalid-email": "Некорректный формат email.",
  "auth/weak-password":
    "Пароль слишком простой. Используйте не менее 6 символов.",
  "auth/user-not-found": "Пользователь не найден. Проверьте введённые данные.",
  "auth/too-many-requests": "Слишком много попыток. Попробуйте позже.",
  "auth/email-already-in-use": "Данный Email уже используется.",
  "auth/password-does-not-meet-requirements": "Пароль слишком короткий.",
}

export default function ErrorAlert({ code }) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  console.log(code)
  useEffect(() => {
    if (code && ERROR_MESSAGES[code]) {
      // Закрываем предыдущее уведомление, если уже открыто
      setOpen(false)

      // Небольшая задержка, чтобы позволить закрыться предыдущему Snackbar
      const timer = setTimeout(() => {
        setMessage(ERROR_MESSAGES[code])
        setOpen(true)
      }, 100) // 100 мс достаточно

      return () => clearTimeout(timer) // Чистим таймер
    }
  }, [code])

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
