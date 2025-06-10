import { useEffect, useState } from "react"
import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  Snackbar,
  Alert,
  Stack,
  Button,
} from "@mui/material"
import { useAppSelector } from "@/app/hooks"

import { fetchTasks } from "@/features/tasks/taskSlice"
import TaskList from "@/components/tasks/TaskList"
import { useDispatch } from "react-redux"
import { useAuth } from "../hooks/use-auth"
import { Link } from "react-router"
import { MoodBad } from "@mui/icons-material"

const Dashboard = () => {
  const dispatch = useDispatch()
  const { user } = useAppSelector((state) => state.user)
  const { tasks } = useAppSelector((state) => state.tasks)

  const [error, setError] = useState("")

  useEffect(() => {
    if (user) {
      dispatch(fetchTasks(user.id))
        .unwrap()
        .catch((err) => {
          setError(err || "Не удалось загрузить задачи")
        })
    }
  }, [dispatch, user])

  const pendingCount = tasks.filter((t) => t.status === "pending").length
  const inProgressCount = tasks.filter((t) => t.status === "in_progress").length
  const doneCount = tasks.filter((t) => t.status === "done").length

  const { isAuth } = useAuth()
  return isAuth ? (
    <Box height="calc(100vh)" px={{ xs: 2, md: 4 }} py={{ xs: 4, md: 6 }}>
      <Stack
        sx={{ display: "flex" }}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems={{ sm: "center" }}
        spacing={2}
        mb={4}
      >
        <Box sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Ваши задачи
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Управляйте своими задачами и отслеживайте их статус
          </Typography>
        </Box>
      </Stack>

      <Grid container spacing={3} mb={4} justifyContent="center">
        <Grid item xs={5} md={3}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Typography variant="subtitle1" color="text.secondary">
                Ожидают
              </Typography>
              <Chip
                label={pendingCount}
                sx={{ bgcolor: "grey.100", color: "grey.800" }}
              />
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle1" color="text.secondary">
                В процессе
              </Typography>
              <Chip
                label={inProgressCount}
                sx={{ bgcolor: "amber.100", color: "amber.800" }}
              />
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle1" color="text.secondary">
                Завершены
              </Typography>
              <Chip
                label={doneCount}
                sx={{ bgcolor: "emerald.100", color: "emerald.800" }}
              />
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      <TaskList />

      {/* Ошибка через Snackbar */}
      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        onClose={() => setError("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" onClose={() => setError("")}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        justifyItems: "center",
        alignItems: "center",
        height: "calc(100vw * (9/16));",
      }}
      px={{ xs: 2, md: 4 }}
      py={{ xs: 4, md: 6 }}
    >
      <Typography variant="h2">
        {" "}
        А кто вы такой? <MoodBad sx={{ width: "150px", height: "150px" }} />
      </Typography>

      <Typography variant="h4">
        {" "}
        Выполните{" "}
        <Button component={Link} color="inherit" to="/login">
          вход
        </Button>
        , чтобы отобразить данные.
      </Typography>
    </Box>
  )
}

export default Dashboard
