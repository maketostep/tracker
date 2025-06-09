import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflowY: 'auto',
};

export default function ConditionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        variant="text"
        size="large"
        color="inherit"
        sx={{ mt: 2, textDecoration:'underline' }} 
        onClick={handleOpen}
      >
        Условия
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-conditions-title"
        aria-describedby="modal-conditions-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" gutterBottom>
            📄 Условия предоставления услуг
          </Typography>
          <Typography variant="body1" paragraph>
            Мы предоставляем доступ к нашему сервису/продукту после успешной оплаты выбранного тарифа.
            После подтверждения оплаты вы получаете доступ в течение нескольких минут.
            Все услуги предоставляются в цифровом виде и не подлежат физической доставке, если не указано иное.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom>
            🚚 Доставка товаров
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Физические товары:
          </Typography>
          <ul style={{ paddingLeft: '1.2rem', marginTop: 0 }}>
            <li><Typography variant="body2">Сроки доставки: 2–7 рабочих дней в зависимости от региона</Typography></li>
            <li><Typography variant="body2">Стоимость доставки: рассчитывается автоматически при оформлении заказа</Typography></li>
            <li><Typography variant="body2">Способы доставки: курьерская служба, самовывоз, почта</Typography></li>
          </ul>

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 2 }}>
            Цифровые товары:
          </Typography>
          <Typography variant="body2">
            Доставка осуществляется мгновенно после оплаты на указанный e-mail или в личном кабинете.
          </Typography>

          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
            🔄 Возврат и отказ от покупки
          </Typography>
          <Typography variant="body1" paragraph>
            Вы можете отказаться от покупки:
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Физические товары:
          </Typography>
          <Typography variant="body2" paragraph>
            В течение 7 дней с момента получения, при условии сохранности упаковки и товарного вида.
            Возврат осуществляется за счёт покупателя.
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Цифровые услуги и подписки:
          </Typography>
          <Typography variant="body2" paragraph>
            Возврат возможен, если услуга не была оказана (не был предоставлен доступ или не использовалась).
          </Typography>

          <Typography variant="body2" paragraph>
            Чтобы оформить возврат, напишите нам на <b>support@lifetracker.ru</b> с указанием:
          </Typography>
          <ul style={{ paddingLeft: '1.2rem', marginTop: 0 }}>
            <li><Typography variant="body2">Номера заказа</Typography></li>
            <li><Typography variant="body2">Причины возврата</Typography></li>
            <li><Typography variant="body2">Контактной информации</Typography></li>
          </ul>

          <Typography variant="body2" sx={{ mt: 2 }}>
            <b>Важно:</b> возврат денежных средств производится в течение 7 рабочих дней с момента одобрения возврата.
          </Typography>
          <Box sx={{display: 'flex', width:"100%", justifyContent: 'center', paddingTop: 2}}>
            <Button onClick={handleClose} color='inherit' variant='outlined'>Закрыть</Button>
          </Box>
        </Box>
        
      </Modal>
    </div>
  );
}
