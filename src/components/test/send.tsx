import React from 'react'
import emitter from '../../utils/events'
const Send: React.FC = (props) => {
    const handleSend = () => {
        emitter.emit('greet', "asxas233455667")
    }
    return <button onClick={handleSend}>发送消息</button>
};
export default Send