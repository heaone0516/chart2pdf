const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/generate-pdf', async (req, res) => {
    try {
        const browser = await puppeteer.launch({headless: 'new'});
        const page = await browser.newPage();

        await page.goto(`http://localhost:${port}/`, {waitUntil: 'networkidle0'});

        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20mm',
                bottom: '20mm',
                left: '10mm',
                right: '10mm',
            },
        });


        await browser.close();

        res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Length', pdfBuffer.length);

        res.end(pdfBuffer); // 핵심: send보다 end가 안정적인 경우가 많음
    } catch (error) {
        console.error('PDF 생성 중 오류:', error);
        res.status(500).send('PDF 생성 실패');
    }
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});