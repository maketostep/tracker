import { Link as RouterLink } from "react-router"
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Grid,
  Paper,
  Stack,
  SvgIcon,
} from "@mui/material"
import { Add, CheckCircle, Label } from "@mui/icons-material"
import ImgMediaCard from "../components/store/ImgMediaCard"

const FeatureCard = ({ icon, title, description }) => (
  <Paper
    elevation={1}
    sx={{
      textAlign: "center",
      p: { xs: 2, md: 3 },
      mb: 3,
      height: "100%",
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        textAlign: "center",
        bgcolor: "grey.200",
        color: "grey.400",
        borderRadius: 2,
        width: 48,
        height: 48,
        mb: 2,
      }}
    >
      {icon}
    </Box>
    <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="center">
      {title}
    </Typography>
    <Typography color="text.secondary" sx={{ flexGrow: 1 }}>
      {description}
    </Typography>
  </Paper>
)
import defaultV from "../img/default.png"
import pro from "../img/pro.png"
import proPlus from "../img/pro+.png"
import adept from "../img/adept.png"
import ConditionsModal from "../components/store/ConditionsModal"
import { useAuth } from "../hooks/use-auth"

const data = [
  {
    id: "1",
    title: "Обычная версия",
    price: "1400",
    description:
      "Подходит для базового использования:\n• Создание и управление задачами\n• До 3 проектов и 50 задач\n• Общая панель прогресса\n\nНДС не облагается",
    url: defaultV,
  },
  {
    id: "2",
    title: "Версия PRO",
    price: "2500",
    description:
      "Для активной командной работы:\n• Все функции обычной версии\n• Аналитика по задачам и времени\n• До 5 участников\n• Экспорт задач в CSV\n\nНДС не облагается",
    url: pro,
  },
  {
    id: "3",
    title: "Версия PRO+",
    price: "3200",
    description:
      "Максимум гибкости и расширений:\n• Все функции PRO\n• Создание собственных автоматизаций\n• Интеграция с Google Calendar\n• Расширенный API-доступ\n\nНДС не облагается",
    url: proPlus,
  },
  {
    id: "4",
    title: "Версия ADEPT",
    price: "4700",
    description:
      "Для профессионалов и бизнеса:\n• Все функции PRO+\n• Кастомные отчёты (PDF/Excel)\n• SLA-поддержка 24/7\n• До 50 участников\n• Личный менеджер\n\nНДС не облагается",
    url: adept,
  },
]

const Index = () => {
  const { isAuth } = useAuth()
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Основной контент */}
      <Box component="main" flexGrow={1}>
        {/* Hero Section */}
        <Box sx={{ bgcolor: "inherit", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Box textAlign="center">
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
              >
                Управляйте своими задачами{" "}
                <Box component="span" color="grey.800">
                  эффективно.
                </Box>
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                maxWidth="md"
                mx="auto"
                mb={4}
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Простой и удобный трекер задач для вас и вашей команды.
                Создавайте задачи, отслеживайте прогресс и достигайте
                результатов.
              </Typography>
              {!isAuth && (
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: "grey.800",
                      "&:hover": { bgcolor: "grey.700" },
                      px: 4,
                    }}
                    component={RouterLink}
                    to="/register"
                  >
                    Начать бесплатно
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    color="inherit"
                    component={RouterLink}
                    to="/login"
                  >
                    Войти в аккаунт
                  </Button>
                </Stack>
              )}
              <ConditionsModal />
            </Box>
          </Container>
        </Box>
        {/* Store */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: { xs: 6, md: 10 },
          }}
        >
          <ImgMediaCard data={data} />
        </Box>

        {/* Features */}
        <Box py={5}>
          <Container>
            <Typography
              variant="h4"
              fontWeight="bold"
              align="center"
              mb={6}
              sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}
            >
              Основные возможности
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FeatureCard
                icon={<Add />}
                title="Создание задач"
                description="Легко создавайте новые задачи с подробным описанием и категориями"
              />
              <FeatureCard
                icon={<CheckCircle />}
                title="Управление статусами"
                description="Отслеживайте прогресс, перемещая задачи между разными статусами"
              />
              <FeatureCard
                icon={<Label />}
                title="Гибкая маркировка"
                description="Используйте теги для категоризации и эффективного поиска задач"
              />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default Index
