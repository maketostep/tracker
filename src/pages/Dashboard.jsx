import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  Snackbar,
  Alert,
  Stack,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchTasks } from '@/features/tasks/taskSlice';
import TaskList from '@/components/tasks/TaskList';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { tasks } = useAppSelector((state) => state.tasks);

  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      dispatch(fetchTasks(user.id))
        .unwrap()
        .catch((err) => {
          setError(err || 'Не удалось загрузить задачи');
        });
    }
  }, [dispatch, user]);

  const pendingCount = tasks.filter((t) => t.status === 'pending').length;
  const inProgressCount = tasks.filter((t) => t.status === 'in_progress').length;
  const doneCount = tasks.filter((t) => t.status === 'done').length;

  return (
    <Box px={{ xs: 2, md: 4 }} py={{ xs: 4, md: 6 }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={2}
        mb={4}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Ваши задачи
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Управляйте своими задачами и отслеживайте их статус
          </Typography>
        </Box>
      </Stack>

      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1" color="text.secondary">
                Ожидают
              </Typography>
              <Chip
                label={pendingCount}
                sx={{ bgcolor: 'grey.100', color: 'grey.800' }}
              />
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1" color="text.secondary">
                В процессе
              </Typography>
              <Chip
                label={inProgressCount}
                sx={{ bgcolor: 'amber.100', color: 'amber.800' }}
              />
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1" color="text.secondary">
                Завершены
              </Typography>
              <Chip
                label={doneCount}
                sx={{ bgcolor: 'emerald.100', color: 'emerald.800' }}
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
        onClose={() => setError('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setError('')}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Dashboard;
