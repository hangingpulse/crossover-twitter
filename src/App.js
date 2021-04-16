import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Post from './component/Post';
import SinglePost from './component/SinglePost'
import './App.css';
import useApi from './hooks/useApi'
import User from './component/User';
import Searchfield from './component/Searchfield';

function App() {

const [messages, users, isLoading] = useApi()
const [searchResult, setSearchResult] = useState([...messages])



const checkSearchResult = () => {
  if (searchResult.length) {
    return (searchResult.map((message, index) => {
      const currentUser = users.find(user => user.userid === message.userid)
      return <Post key={index} user={currentUser} message={message} />}))
  } else {
      return (messages.map((message, index) => {
        const currentUser = users.find(user => user.userid === message.userid)
        return <Post key={index} user={currentUser} message={message} />}))
  }
}


return (
  <div className="App">
      <div className="App__sidebar">
        <Searchfield setSearchResult={setSearchResult} users={users} messages={messages}/>
        
        { isLoading ||
        <div className="App__currentUser">
          <img src={`https://source.unsplash.com/${users[0].userpicture}/300x300`} alt="" className="currentUser__picture"/>
          <div className="currentUser__name">
            {users[0].username}
          </div>
        

        </div>

        }
      </div>
        <Switch>
          
          <Route path={`/:userid/:messageid`} >
            <SinglePost />
          </Route>
          <Route path={`/:userid`} >
            <User />
          </Route>
          <Route path="/" >
            
            <div className="App__posts">
            <h1 className="App__title">Welcome to Twipster</h1>
              { isLoading ||
                checkSearchResult()
                
              }
            </div>
          </Route>

        </Switch>

      <div className="App__randompost">
        <h2 className="App__randompost__title">Post of the day</h2>
          {isLoading || <Post user={users} message={messages[Math.floor(Math.random() * messages.length)]}/>}
      </div>
    </div>
  );
}

export default App;

// const [messages, setMessages] = useState([])
// const [users, setUsers] = useState([])
// const [isLoading, setIsLoading] = useState(true) 

// // Fetch Data from API
// useEffect(() => {
//   const apiUrl = "https://twitter-collab-project.herokuapp.com/"
//   const requestMessages = axios.get(`${apiUrl}messages`)
//   const requestUsers = axios.get(`${apiUrl}users`)
//   axios.all(([requestMessages, requestUsers]))
//     .then(([messageData, userData]) => {
//       setMessages(messageData.data)
//       setUsers(userData.data)
//       setIsLoading(false)
//     }).catch(() => console.log('request failed'))
// }, [])

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
