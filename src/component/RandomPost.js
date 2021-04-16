import React from 'react';
import {Link} from 'react-router-dom'
import './Post.css'

function Post( { user, message }) {
  const messageText = message.message.split('\\n').map(line => {
    return <p>{line}</p>
  })

return (
  <Link className='link' to={`/${user.userid}/${message.messageid}`}>
  <div className="Post RandomPost">
      <div className="Post__message">
          <div className="Post __info-and-image">
              <div className="Post__image-and-title">
                  <img className="Post__image" src={`https://source.unsplash.com/${message.messagepicture}/300x300`} alt="" />
                  <h2 className="Post__title">{message.messagetitle}</h2>
              </div>
              <div className="Post__info">
                  <div className="Post__text">
                  {messageText}
                  </div>
                  <div className="Post__date">{message.createddate}</div>
              </div>
          </div>
      </div>

    <div className="Post__user">
      <img
        src={`https://source.unsplash.com/${user.userpicture}/300x300`}
        alt="username"
        className="User__image"
      />
      <div className="User__name">{user.username}</div>
    </div>
  </div>
  </Link>
);
}

export default Post;
