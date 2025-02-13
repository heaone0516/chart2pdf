const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static('public'));

// 라우트 불러오기
const pdfRoutes = require('./routes/pdfRoutes');
app.use('/', pdfRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
