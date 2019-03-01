import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CharacterContainer from './CharacterContainer.js'
import SearchBar from './SearchBar.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      filtered:[],
    }
  }

  // GET ALL CHARACTER DATA FROM API CALL
  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://api.got.show/api/characters/',
      responseType: 'json',
    }).then(response => {
      // Response.data contains the actual character information
      response = response.data
      // Filter the entirety of the data (2000+ characters) for only ones with an image and a pageRank above 100 (100ish characters to get total amount of characters this app will use)
      const filteredResponse = response.filter(character => {
        return character.imageLink && character.pageRank > 100;
      })
      // set state on the app to hold an arry with all of the characters
      this.setState({
        characters: filteredResponse,
        filtered: filteredResponse
      })
    })
  }
  render() {
    return (
      <div className="App">
      <SearchBar />
      <CharacterContainer 
          characters={this.state.filtered}  
      />
      </div>
    );
  }
}

export default App;
