const express = require('express') // exprsee cretae web server
const mongoose = require('mongoose')   // for database

require('dotenv').config() // for environment 

const routes = require('./routes/TaskRoute')

const cors = require('cors')    // cors is use for cross origin

const app = express()
const PORT = process.env.PORT | 5000    // define the port to the server on that port


app.use(express.json())    
app.use(cors())


// app.get('/',(req,res)=>{
//     res.send('WELCOME')
// })


// another way to connect database
// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log('MongoDB Connected...'))
// .catch((err) => console.log(err));


const client = mongoose.connect(process.env.MONGO_URI)

if(!client)
{
   console.log('cannot connect to db..!!')
}
else
{
    console.log('connected to db..!!!')
}

app.use('/api',routes)


app.listen(PORT, () =>{ 
    console.log(`Listening at ${PORT}`)
})
