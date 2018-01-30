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

	// printCharacters() {
	// 	let charactersToShow = this.state.characters;
	// 	return (<ul className="listCharacter">
   //    {
   //    	charactersToShow.map(
   //        character => <li>
   //          <HarryPoterList name={character.name} photo={character.image} house={character.house}
	// 			alive={character.alive? 'live': 'dead'} />
   //        </li>
   //      )
   //    }
   //  </ul>);
	// }

	filter(e){
		this.setState({filter: e.target.value})
		console.log(e);
	}


  	render() {
		let characters = this.state.characters;
		if(this.state.filter){
			characters = characters.filter( character => character.name.toLowerCase().includes(this.state.filter.toLowerCase()))
		}
    return (
      <div className="App">
        <header className="App-header">
         	<h1 className="App-title">Harry Potter Characters</h1>
        </header>
		  <main>
		  		<input type="text" name="search" placeholder="Write a Harry Potter character" onChange={this.filter.bind(this)}/>
				<div>
					{characters.map(character => <h2>{character.name}</h2>
					)}
				</div>
		  </main>
      </div>
    );
  }
}

export default App;


// <div>{this.printCharacters()}</div>
