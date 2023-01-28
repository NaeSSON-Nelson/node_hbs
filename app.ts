import express from'express';
import hbs from 'hbs';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

//middlewares
app.use(express.static('public'))
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials',()=>{
    console.log('partials');
});

app.get('/', (_req, res) => {
  res.render('home',{
    home:'inicio',
    name:'Roleando Name'
  });
})
app.get('/generic', (_req, res) => {
    res.status(200).render('generics',{});
})
app.get('/elements', (_req, res) => {
    res.status(200).render('elements',{});
})
app.get('*', (_req, res) => {
  res.status(404).sendFile(__dirname+'/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})