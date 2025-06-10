import { Box, Button, TextField } from "@mui/material"
import React, { useState } from "react"

export default function Form({ title, handleClick }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Box component="form" onSubmit={(e) => handleClick(e, email, password)}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={(e) => setEmail(e.target.value)}
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
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "#616161",
          "&:hover": { backgroundColor: "#424242" },
        }}
      >
        {title}
      </Button>
    </Box>
  )
}
