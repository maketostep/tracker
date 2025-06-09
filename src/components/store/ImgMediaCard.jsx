import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { NavLink } from 'react-router';

export default function ImgMediaCard({data}) {
  return <Container sx={{display: 'flex', flexWrap: 'nowrap', gap: 3}}>
{data.map(card => 
  <Card key={card.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '500px' }}>
        <CardMedia
          component="img"
          alt={card.title}
          height="350"
          image={card.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={NavLink} to='login' sx={{color: 'inherit'}} size="small">Купить</Button>
          <Typography>Цена: {card.price} ₽ </Typography> 
        </CardActions>
      </Card>
)}
  </Container>
   
  }