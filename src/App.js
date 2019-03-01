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
  handleChange = e => {
    let currentCharacters = []
    let filteredCharacters = []

    if (e.target.value === '') {
      filteredCharacters = this.state.characters
    } else {
      currentCharacters = this.state.characters;
      filteredCharacters = currentCharacters.filter(character => {
        const lcSearch = new RegExp(e.target.value.toLowerCase(),'i')
        console.log(character.name.match(lcSearch));
        return character.name.match(lcSearch);
      })
    }
    
    this.setState({
      search: e.target.value,
      filtered: filteredCharacters,
    })

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
        filtered: filteredResponse,
        search: '',
      })
    })
  }
  render() {
    return (
      <div className="App">
        <input 
          type="text" 
          name="search" 
          placeholder='Search' 
          onChange={this.handleChange}
          value={this.state.search}
          />
      <CharacterContainer 
        characters={this.state.filtered}  
      />
      </div>
    );
  }
}

export default App;
