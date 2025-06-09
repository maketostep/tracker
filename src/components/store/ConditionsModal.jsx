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
  width: '90%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
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
        sx={{ mt: 2 }}
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
          <Typography id="modal-conditions-title" variant="h5" fontWeight="bold" gutterBottom>
            Условия предоставления услуг
          </Typography>

          <Typography variant="body1" gutterBottom>
            📄 Мы предоставляем доступ к нашему сервису/продукту после успешной оплаты выбранного тарифа. 
            После подтверждения оплаты вы получаете доступ в течение нескольких минут. 
            Все услуги предоставляются в цифровом виде и не подлежат физической доставке, если не указано иное.
          </Typography>

          <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
            🚚 Доставка товаров
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 1 }}>
            <strong>Если речь идет о физических товарах:</strong>
            <ul>
              <li>Сроки доставки: 2–7 рабочих дней в зависимости от региона.</li>
              <li>Стоимость доставки: рассчитывается автоматически при оформлении заказа.</li>
              <li>Способы доставки: курьерская служба, самовывоз, почта.</li>
            </ul>
            <strong>Для цифровых товаров:</strong><br />
            Доставка осуществляется мгновенно после оплаты на указанный e-mail или в личном кабинете.
          </Typography>

          <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
            🔄 Возврат и отказ от покупки
          </Typography>
          <Typography variant="body1">
            Вы можете отказаться от покупки:
            <ul>
              <li>
                <strong>Физических товаров</strong> — в течение 7 дней с момента получения, при условии сохранности упаковки и товарного вида. Возврат осуществляется за счёт покупателя.
              </li>
              <li>
                <strong>Цифровых услуг или подписок</strong> — возврат возможен, если услуга не была оказана (не был предоставлен доступ/не использовалась).
              </li>
            </ul>
            Чтобы оформить возврат, напишите нам на <strong>support@yourdomain.ru</strong> с указанием:
            <ul>
              <li>номера заказа,</li>
              <li>причины возврата,</li>
              <li>и контактной информации.</li>
            </ul>
            <strong>Важно:</strong> возврат денежных средств производится в течение 7 рабочих дней с момента одобрения возврата.
          </Typography>
          <Box sx={{display: 'flex', width:"100%", justifyContent: 'center', p: 2}}>
            <Button onClick={handleClose} color='inherit' variant='outlined'>Закрыть</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
