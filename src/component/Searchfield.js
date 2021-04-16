import React, {useState} from 'react';
import '../App.css'

const Searchfield = ({messages, users, setSearchResult}) => {
    
    const [currentSearch, setCurrentSearch] = useState('')

    const performSearch = () => {
        console.log(currentSearch)
        const textResults = messages.filter(message => message.message.includes(currentSearch))
        const titleResults = messages.filter(message => message.messagetitle.includes(currentSearch))
        const userResults = users.filter(user => user.username.includes(currentSearch))
        if (textResults.length || titleResults.length) {
            setSearchResult([...textResults, ...titleResults])
        }
        setCurrentSearch('')
    }

    const clearResult = () => {
        setSearchResult([])
    }

    const keyDown = (evt) => {
        if(evt.keyCode === 13){
            performSearch()
        }
    }

    return (
        <div className="Searchfield__container">
            <input className="Searchfield__input"
                onChange={(e) => setCurrentSearch(String(e.target.value))}
                name="search"
                placeholder="Search"
                onKeyDown={keyDown}
                value={currentSearch}>
            </input>
            <button className="Searchfield__button--search" onClick={() => performSearch()} >
                Search
            </button>
            <button className="Searchfield__button--clear" onClick={() => clearResult()} >
                Clear
            </button>
        </div>
    )
}

export default Searchfield
