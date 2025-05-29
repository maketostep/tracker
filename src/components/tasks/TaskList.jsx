import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Chip, Divider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

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

const TaskList = ({ tasks = [
    { 
        id: '1', 
        title: 'Сделать уроки',
        status: 'done'
    },
    { 
        id: '2', 
        title: 'Пойти в школу',
        status: 'in_progress'
    },
    { 
        id: '3', 
        title: 'Учится',
        status: 'pending'
    },
    { 
        id: '4', 
        title: 'Сдать экзамен',
        status: 'pending'
    },
    { 
        id: '5', 
        title: 'Занятся спортом',
        status: 'pending'
    }
] }) => {
  if (!tasks.length) {
    return <p>Задачи не найдены.</p>;
  }

  return (
    <List sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', width: 'auto'}}>
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <ListItem disablePadding>
            <ListItemIcon>
              {statusIcon[task.status] || null}
            </ListItemIcon>
            <ListItemText
              primary={task.title}
              secondary={
                <Chip
                  label={statusLabel[task.status] || 'Неизвестно'}
                  color={
                    task.status === 'done' ? 'success' :
                    task.status === 'in_progress' ? 'info' :
                    'warning'
                  }
                  size="small"
                />
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
