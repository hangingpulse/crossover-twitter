import React, { useState, useEffect } from 'react';
import Post from './component/Post';

import './App.css';

function App() {

const [messages, setMessages] = useState([])
const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(true) 

// Fetch Data - Messages from API
useEffect(() => {
  fetch("https://twitter-collab-project.herokuapp.com/messages")
    .then((response) => response.json())
    .then((json) => {
      setIsLoading(false)
      setMessages(json)
    })
    .catch(()=> console.log("Message API failed"))
}, [])

// Fetch Data - User from API
useEffect(() => {
  fetch("https://twitter-collab-project.herokuapp.com/users")
    .then((response) => response.json())
    .then((json) => {
      setIsLoading(false)
      setUsers(json)
    })
    .catch(()=> console.log("Users API failed"))
}, [])

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
