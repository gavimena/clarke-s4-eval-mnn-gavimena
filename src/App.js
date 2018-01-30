import React, { Component } from 'react';
import './App.css';
import HarryPoterList from './components/HarryPoterList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: []
		};
	};

	componentDidMount() {
		fetch('http://hp-api.herokuapp.com/api/characters')
		.then(response => response.json())
		.then(json => {
			this.setState({
				characters: json
			});
		console.log(this.state.characters);
		});
	}

	printCharacters() {
		let charactersToShow = this.state.characters;
		return (<ul className="listCharacter">
      {
      	charactersToShow.map(
          character => <li>
            <HarryPoterList name={character.name} photo={character.image} house={character.house}
				alive={character.alive? 'live': 'dead'} />
          </li>
        )
      }
    </ul>);
	}

  	render() {
    return (
      <div className="App">
        <header className="App-header">
         	<h1 className="App-title">Harry Potter Characters</h1>
        </header>
		  <main>
		  		<input type="text" name="search"></input>
				<div>{this.printCharacters()}</div>
		  </main>
      </div>
    );
  }
}

export default App;
