// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/products', async (req, res) => {
    try {
        const response = await axios.get('https://onrender.com/api/products');
        const products = response.data;
        res.json(products); // Trả về danh sách sản phẩm
    } catch (error) {
        console.error('Có lỗi xảy ra:', error);
        res.status(500).send('Có lỗi xảy ra khi lấy danh sách sản phẩm.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
