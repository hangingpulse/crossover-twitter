import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

import Post from './Post'

function SinglePost( { users, message }) {
    // const [messages, users, isLoading] = useApi()
    // const currentMessage = messages.find(message => message.messageid === Number(messageid))
    const [singlePost, setSinglePost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {messageid} = useParams()
    const {userid} = useParams()
    

    useEffect(() => {
        const apiUrl = "https://twitter-collab-project.herokuapp.com/"
        const userRequest = axios.get(`${apiUrl}users/${userid}`)
        const messageRequest = axios.get(`${apiUrl}messages/${messageid}`)
        axios.all([userRequest, messageRequest])
            .then(([user, message]) => {
            setSinglePost([user.data, message.data])
            setIsLoading(false)
            // console.log([user.data, message.data])
          }).catch(() => console.log('request single post failed'))
      }, [])

    return (
        <div>
            {isLoading || <Post user={singlePost[0]} message={singlePost[1]}/>}        
        </div>
    )
}

export default SinglePost
