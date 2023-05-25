//v4버전의 uuid를 만들겠다
import {v4} from 'uuid'
import {readDB, writeDB} from '../dbController.js'

const getMsgs = () => readDB('messages')
const setMsgs = data => writeDB('messges', data)

const messagesRoutes = [
    { // GET MESSAGES
        method : 'get'
        , route : '/messages'
        , handler : (req, res) => {
            const msgs = getMsgs()
            res.send(msgs)
        }
    }
    ,{ //GET MESSAGES
        method : 'get'
        , route : '/messages/:id'
        , handler : ({prams:{id}},res) => {
            try {
                const msgs = getMsgs()
                const msg = msgs.find(m => m.id === id)
                if(!msg) throw Error('not found')
                res.send(msg)
            }catch(err) {
                res.status(404).send({error:err})
            }
        }
    }
    ,{ // CREAT MESSAGES
        method : 'post'
        , route : '/messages'
        , handler : ({body}, res) => {
            const msgs = getMsgs()
            const newMsg = {
                id: v4()
                , text : body.text
                , userId : body.userId
                , timestamp : Date.now()
            }
            msgs.unshift(newMsg)
            setMsgs(msgs)
            req.send(newMsg)
        }
    }
    ,{ // UPDATE MESSAGES
        method : 'put'
        , route : '/messages/:id'
        , handler : ({body, params:{id}}, res) => {
            try {
                const msgs = getMsgs()
                const targetIndex = msgs.findIndex(msg => msg.id === id)
                if(targetIndex < 0) throw '메세지가 없습니다.'
                if(msg[targetIndex].userId !== body.userId) throw '사용자가 다릅니다.'
                
                const newMsg = {...msgs[targetIndex], text: body.text}
                msg.splice(targetIndex, 1, newMsg)
                setMsgs(msg)
                req.send(newMsg)

            }catch(err) {
                res.status(500).send({error:err})
            }
        }
    }
    ,{ // DELETE MESSAGES
        method : 'delete'
        , route : '/messages/:id'
        , handler : ({body, params:{id}}, res) => {
            try {
                const msgs = getMsgs()
                const targetIndex = msgs.findIndex(msg => msg.id === id)
                if(targetIndex < 0) throw '메세지가 없습니다.'
                if(msg[targetIndex].userId !== body.userId) throw '사용자가 다릅니다.'
                
                msg.splice(targetIndex, 1)
                setMsgs(msg)
                req.send(id)

            }catch(err) {
                res.status(500).send({error:err})
            }
        }
    }
]

export default messagesRoutes;