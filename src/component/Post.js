import React from 'react';
import './Post.css'

function Post( { users, message }) {
const currentUser = users.find(user => user.id === message.userId)

return (
        <div className="Post">
            <div className="Post__message">
                <div className="Post__info">
                    <h2 className="Post__title">Everlasting Sunset</h2>
                    <div className="Post__text">
                       {message.text}
                    </div>
                    <div className="Post__date">
                        2021/04/15
                    </div>
                </div>
                <img className="Post__image" src={message.imgUrl} alt=''/>
            </div>

            <div className="Post__user">
                <img src="https://source.unsplash.com/4cbturTSD2U/100x320" alt="username" className="User__image"/>
                <div className="User__name">
                   {currentUser.firstname}
                </div>
            </div>
        </div>
    )
}

export default Post;
