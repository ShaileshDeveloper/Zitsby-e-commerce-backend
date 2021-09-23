const express = require('express');
const products = require('./backend/products')
const cors = require('cors')
const dbconnection = require('./backend/dbconnection')
const dotenv= require('dotenv')
const productRouter = require('./backend/routers/product.router')
const userRouter = require('./backend/routers/user.router')
dotenv.config()
const bcrypt = require("bcryptjs")


const app = express();
app.use(cors())
app.use(express.json())
dbconnection()

app.get('/', (req,res)=> {
	res.send('product')
})
app.use('/products' , productRouter)
app.use('/users' , userRouter)


app.listen(5000 , (req, res) => {
    console.log('express is workingg')
})
