import React, { Component } from 'react';
import './App.css';
import HarryPoterList from './components/HarryPoterList';

//funcion constructora
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: []
		};
	};

	//Llamada a servidor con promesas
	componentDidMount() {
		fetch('http://hp-api.herokuapp.com/api/characters')
		.then(response => response.json())
		.then(json => {
			this.setState({
				characters: json
			});
		});
	}

	//Obtiene texto introducido en el input
	filter(event){
		this.setState({filter: event.target.value})
	}


  	render() {
		let characters = this.state.characters;
		//Condifción para filtar por letra introducida
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
						<ul> {characters.map(character => <li>
						<HarryPoterList
						name={character.name}
						photo={character.image}
						house={character.house}
						alive={character.alive? 'live': <img className="dead" src={ require('./images/dead.svg') } /> } />
						</li>
						)}
						</ul>
					</div>
		  		</main>
      	</div>
    	);
  	}
}

export default App;
