const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const home = "/";
const about = "/about";
const pathJSON = path.join(__dirname, "views.json");

app.get("/", (req, res) => {
    const ViewToJSON = JSON.parse(fs.readFileSync(pathJSON), "utf-8")
    ViewToJSON.homeViews += 1;
    fs.writeFileSync(pathJSON, JSON.stringify(ViewToJSON, null, 2))
    res.send(`<h1>Корневая страница</h1>
    <p>Количество просмотров: ${ViewToJSON.homeViews}</p>
    <a href=${about}>Ссылка на страницу /about</a>`)
});

app.get("/about", (req, res) => {
    const ViewToJSON = JSON.parse(fs.readFileSync(pathJSON), "utf-8")
    ViewToJSON.aboutView += 1;
    fs.writeFileSync(pathJSON, JSON.stringify(ViewToJSON, null, 2))
    res.send(`<h1>Cтраница about</h1>
    <p>Количество просмотров: ${ViewToJSON.aboutView}</p>
    <a href=${home}>Ссылка на главную страницу /</a>`)
});

app.use(function (req, res, next) {
    res.status(404).send("Страницы не существует. Код 404");
  });

app.listen(3000, function(){
    console.log("Слушает порт 3000")
});
