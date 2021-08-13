const express = require("express");
const path = require('path');
const fs = require('fs').promises;
// const cors = require('cors');
const app = express();


app.use(express.static(path.join(__dirname, '/client/build/')));
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(cors());

// app.post('/save', async (req, res) => {
//     const img = req.body;
//     console.log(img);
//     const data = img.savedSketchData.slice(22);
//     const buf = Buffer.from(data, "base64");
//     await fs.writeFile("image.png", buf);
// })

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`express server is running on ${PORT}`);
})