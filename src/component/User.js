import React from 'react';
import { useParams } from 'react-router-dom'
import useApi from '../hooks/useApi'
import Post from './Post'


function User() {
    
    const [messages, users] = useApi()
    
    const {userid} = useParams()

    const currentUser = users.find(user => user.userid === Number(userid))

    return (
        <div className='User'>
            <div className="User__name">
            {currentUser.username}
            </div>
            <div className="User__picture">
            {currentUser.usericture}
            </div>
            <div className="User__bio">
            {currentUser.userbio}
            </div>
            {messages.map((message, index) => {
                if (message.userId === currentUser.id) {
                    return <Post key={index} users={users} message={message}/>
                }
                return ''
            })}
        </div>
    )
}

export default User
