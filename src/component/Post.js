import React from 'react';
import './Post.css'

function Post( { users, message }) {
const currentUser = users.find(user => user.id === message.userId)

return (
  <div className="Post">
    <div className="Post__message">
        <div className="Post__info-and-image">
            <div className="Post__image-and-title">
                <img className="Post__image" src={message.imgUrl} alt="" />
                <h2 className="Post__title">Everlasting Sunset</h2>
            </div>
            <div className="Post__info">
                <div className="Post__text">
                The sun is setting for days now.<br/>
                But I've been waiting, my love.<br/>
                And I will<br/>
                keep waiting<br/>
                To watch the sunset with you.
                </div>
                <div className="Post__date">2021/04/15</div>
            </div>
        </div>
    </div>

    <div className="Post__user">
      <img
        src="https://source.unsplash.com/49vJaRGg9fA/300x300"
        alt="username"
        className="User__image"
      />
      <div className="User__name">{currentUser.firstname}</div>
    </div>
  </div>
);
}

export default Post;
