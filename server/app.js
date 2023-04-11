import express from 'express'
import usersRouter from './routes/users.js';
import path from 'path'
import cors from 'cors'
import expressLayouts from 'express-ejs-layouts'
const app = express();
const port =8000;

app.set('view engine', 'ejs');

app.set('layout', 'layouts/layout');
app.use(expressLayouts)
app.use(cors());
app.get('/',(req, res)=>{
  res.render('index',{
    title:'Home Page',
    heading:'Welcome Baby Come to Dubai'
  });
});
app.get('/about',(req, res)=>{
    res.render('index',{
      title:'About Page',
      heading:'Welcome Baby About Page'
    });
  });
  app.get("/message", (req, res) => {
    res.json(
      { message: `Hello my listen ${port}` }
      );
  });
  
app.use('/users',usersRouter)
app.use((req,res)=>{
    res.status(404).send("Page Not Found 404")
})
app.listen(port, ()=>{console.log(`New adress ${port}.`);
}
);
