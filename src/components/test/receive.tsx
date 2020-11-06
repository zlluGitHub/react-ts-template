import React from 'react'
import emitter from '../../utils/events'
const Receive: React.FC = (props) => {
    const [msg, setMsg] = React.useState('');
    React.useEffect(() => {
        emitter.on('greet', msg => { setMsg(msg) })
        return () => {
            emitter.removeListener('greet', msg => { setMsg(msg) })
        };
    });

    return <div>{msg}</div>

};
export default Receive