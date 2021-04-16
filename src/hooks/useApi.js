import {useEffect, useState} from 'react'
import axios from 'axios'

function useApi() {
const [messages, setMessages] = useState([])
const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(true) 
// console.log(messages, users)

// Fetch Data from API
useEffect(() => {
  const apiUrl = "https://twitter-collab-project.herokuapp.com/"
  const requestMessages = axios.get(`${apiUrl}messages`)
  const requestUsers = axios.get(`${apiUrl}users`)
  axios.all(([requestMessages, requestUsers]))
    .then(([messageData, userData]) => {
      setMessages(messageData.data)
      setUsers(userData.data)
      setIsLoading(false)
    //   console.log(messageData)
    }).catch(() => console.log('request failed'))
}, [])
    
return [messages, users, isLoading]

}

export default useApi
