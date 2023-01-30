import MsgItem from "./MsgItem"

const UserIds = ['zimmy', 'rabbit']
const getRandomUserId = () => UserIds[Math.round(Math.random())]

const msgs = Array(50).fill(0).map((_,i) => ({
    id : i+1,
    userId : UserIds[i%2],
    timestamp : 123456890123 + i * 1000 * 60,
    text: `${i + 1} test data`,
})).reverse()

const MsgList = () => (
    <ul className="messages">
        {msgs.map(x => <MsgItem key={x.id} {...x} />)}
    </ul>
)

export default MsgList