import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Post from './component/Post';
import './App.css';

function App() {

const [messages, setMessages] = useState([])
const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(true) 

useEffect(() => {
  
  const apiUrl = "https://twitter-collab-project.herokuapp.com/"
  const requestMessages = axios.get(`${apiUrl}messages`)
  const requestUsers = axios.get(`${apiUrl}users`)
  axios.all([requestMessages, requestUsers])
    .then(response => {
      setMessages(response[0].data)
      setUsers(response[1].data)
      setIsLoading(false)
    }).catch(() => console.log('request failed'))
}, [])

// Fetch Data - Messages from API
// useEffect(() => {
//   fetch("https://twitter-collab-project.herokuapp.com/messages")
//     .then((response) => response.json())
//     .then((json) => {
//       setIsLoading(false)
//       setMessages(json)
//       console.log(json)
//     })
//     .catch(()=> console.log("Message API failed"))
    
//     fetch("https://twitter-collab-project.herokuapp.com/users")
//       .then((response) => response.json())
//       .then((json) => {
//         setIsLoading(false)
//         setUsers(json)
//         console.log(json)
//       })
//       .catch(()=> console.log("Users API failed"))
// }, [])

// Fetch Data - User from API

  return (
    <div className="App">
      <div className="App__sidebar">
        {/* <Searchfield />
        <Userinfo /> */}
{/* <Switch />
<Route >user page depending on userID</Route>
<Route >message page depending on messageID</Route>
</Switch>*/}
      </div>
      <div className="App__posts">
        {/* <Input /> */}
        { isLoading ||
          messages.map((message, index) => <Post key={index} users={users} message={message} />)
        }
      </div>
      <div className="App__randompost">
        {isLoading || <Post users={users} message={messages[Math.floor(Math.random() * messages.length)]}/>} 
      </div>
    </div>
  );
}

export default App;
