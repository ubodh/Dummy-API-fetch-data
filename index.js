import express from 'express';
import userController from './src/controllers/users.controller.js';
const app = express();
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(express.static('./src/views'));

app.get('/user', userController);

app.listen(3400,()=>{
    console.log('server is runing at 3400 port');
})