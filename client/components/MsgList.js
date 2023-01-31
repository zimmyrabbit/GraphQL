import { useState } from 'react'
import MsgItem from "./MsgItem"
import MsgInput from "./MsgInput"

const UserIds = ['zimmy', 'rabbit']
const getRandomUserId = () => UserIds[Math.round(Math.random())]

const originalMsgs = Array(50).fill(0).map((_,i) => ({
    id : i+1,
    userId : UserIds[i%2],
    timestamp : 123456890123 + i * 1000 * 60,
    text: `${i + 1} test data`,
})).reverse()

const MsgList = () => {
    const [msgs, setMsgs] = useState(originalMsgs)
    const onCreate = text => {
        const newMsg = {
            id: msgs.length + 1,
            userId : 'HI',
            timestamp : Date.now(),
            text: `${msgs.length + 1} ${text}`,            
        }
        setMsgs(msgs => ([newMsg, ...msgs]))
    }

    return (
        <>
            <MsgInput mutate={onCreate}/>
            <ul className="messages">
                {msgs.map(x => <MsgItem key={x.id} {...x} />)}
            </ul>
        </>
    )
}

export default MsgList