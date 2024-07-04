const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const PORT = 3000;
const removeHeaders = require("./middleware/removeHeaders");

const app = express();
const indexRouter = require("./routes/index.routes");

app.use(express.urlencoded({ extended: true })); // это встроенный в экспресс метод для распознавания входящего объекта запроса в виде строк или массивов .
app.use(express.json()); // это встроенный в экспресс метод для распознавания входящего объекта запроса как объекта JSON
app.use(morgan('dev'));
app.use(removeHeaders);
app.use(cookieParser());
app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});