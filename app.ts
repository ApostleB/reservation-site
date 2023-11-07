import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path'
import router from './src/routes';
import { sequelize } from './src/models';
// 스웨거
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

const swaggerSpec = YAML.load(path.join(__dirname, './swagger.yaml'))

dotenv.config();
// Express 애플리케이션 생성
const app = express();
const port = 3000; // 포트 번호 (원하는 포트로 변경)

app.use(morgan(process.env.MORGAN_LOG_FORMAT || 'combined'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// 미들웨어 설정 (예: JSON 파싱)
app.use(express.json());

app.use('/', router);

// 서버 시작
app.listen(port, async () => {
  console.log(`서버가 http://localhost:${process.env.PORT} 에서 실행 중입니다.`);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});