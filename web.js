// web.js
let express = require("express");
const path = require("path")
const app = express();
const port = 8001

app.use(express.static(path.join(__dirname, '/build'))); // react를 빌드한 결과물이 담긴 디렉토리 /build 에 접근하여 미들웨어를 생성해준다.

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/build","index.html"));
})

app.get("/company", (req, res) => {
    res.sendFile(path.join(__dirname, "/build","index.html"));
})

app.get("/business", (req, res) => {
    res.sendFile(path.join(__dirname, "/build","index.html"));
})

app.get("/skills", (req, res) => {
    res.sendFile(path.join(__dirname, "/build","index.html"));
})

app.get("/contacts", (req, res) => {
    res.sendFile(path.join(__dirname, "/build","index.html"));
})

app.listen(port,()=>{
    console.log(`example test port ${port}`);
})