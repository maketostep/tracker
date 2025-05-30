import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText, ListItemIcon, Chip, Divider, CircularProgress, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { fetchTasks } from '../../features/tasks/taskSlice';

const statusIcon = {
  pending: <HourglassEmptyIcon color="warning" />,
  in_progress: <PlayCircleOutlineIcon color="info" />,
  done: <CheckCircleOutlineIcon color="success" />,
};

const statusLabel = {
  pending: 'Ожидает',
  in_progress: 'В процессе',
  done: 'Завершена',
};

const TaskList = () => {
  const dispatch = useDispatch()
  const { tasks, loading, error } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks(1))
  }, [dispatch])
  // const tasks = [
  //   { 
  //       id: '1', 
  //       title: 'Сделать уроки',
  //       status: 'done'
  //   },
  //   { 
  //       id: '2', 
  //       title: 'Пойти в школу',
  //       status: 'in_progress'
  //   },
  //   { 
  //       id: '3', 
  //       title: 'Учится',
  //       status: 'pending'
  //   },
  //   { 
  //       id: '4', 
  //       title: 'Сдать экзамен',
  //       status: 'pending'
  //   },
  //   { 
  //       id: '5', 
  //       title: 'Занятся спортом',
  //       status: 'pending'
  //   }]
  if (!tasks.length) {
    return <p>Задачи не найдены.</p>;
  }



  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Ошибка: {error}</Typography>;
  if (!tasks.length) return <Typography>Задачи не найдены.</Typography>;

  return (
    <List sx={{ display: 'flex', flexDirection: 'column', width: 'auto' }}>
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <ListItem disablePadding>
            <ListItemIcon>
              {statusIcon[task.status] || null}
            </ListItemIcon>
            <ListItemText
                primary={
                  <>
                    {task.title}
                    <Typography variant="body2" component="span" sx={{ ml: 1 }}>
                      <Chip
                        label={statusLabel[task.status] || 'Неизвестно'}
                        color={
                          task.status === 'done'
                            ? 'success'
                            : task.status === 'in_progress'
                            ? 'info'
                            : 'warning'
                        }
                        size="small"
                      />
                    </Typography>
                  </>
                }
              />
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default TaskList;
