import express from 'express'
import cors from 'cors'
import messagesRoutes from './routes/messages.js'
import userRoute from './routes/users.js'

//express 생성으로 app 생성
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000'
    ,credentials : true 
})) 

// get 메서드로 '/' router를 들어갔을 때, Handler 실행
// app.[method]('route',Handler)
/*
app.get('/', (req,res) => {
    res.send('ok')
})
app.post('/messages', (req,res)=> {
    ...
})
app.put('/messages/:id', (req,res)=> {
    ...
})
*/
const routes = [...messagesRoutes, ...userRoute]
routes.forEach(({method, route, handler}) => {
    app[method](route,handler)
})

app.listen(8000, ()=> {
    console.log('server listening on 8000....')
})