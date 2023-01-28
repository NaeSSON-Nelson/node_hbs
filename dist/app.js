"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hbs_1 = __importDefault(require("hbs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
//middlewares
app.use(express_1.default.static('public'));
app.set('view engine', 'hbs');
hbs_1.default.registerPartials(__dirname + '/views/partials', () => {
    console.log('partials');
});
app.get('/', (_req, res) => {
    res.render('home', {
        home: 'inicio',
        name: 'Roleando Name'
    });
});
app.get('/generic', (_req, res) => {
    res.status(200).render('generics', {});
});
app.get('/elements', (_req, res) => {
    res.status(200).render('elements', {});
});
app.get('*', (_req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
