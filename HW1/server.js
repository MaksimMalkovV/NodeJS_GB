const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    const urlhome = "/home";
    const urlabout = "/about";

    if (req.url === urlhome) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Корневая страница</h1>
            <p>Просмотров: ${homeViews()}</p>
            <a href=${urlabout}>Обо мне</a>`);
    } else if (req.url === urlabout) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Страница about</h1>
            <p>Просмотров: ${aboutViews()}</p>
            <a href=${urlhome}>Главная страница</a>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Страница не найдена!</h1>
            <p>Просмотров: ${ErrViews()}</p>`);
    };

});

const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});


function LookCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let homeViews = LookCounter();
let aboutViews = LookCounter();
let ErrViews = LookCounter();