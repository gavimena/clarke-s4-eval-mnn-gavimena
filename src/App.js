import React, { Component } from 'react';
import './App.css';
import HarryPoterList from './components/HarryPoterList';
import Houses from './components/Houses';

//función constructora
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: []
		};
	};

	//Llamada a servidor con promesas
	componentWillMount() {
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
		//Condición para filtar por letra introducida
		if(this.state.filter){
			characters = characters.filter( character => character.name.toLowerCase().includes(this.state.filter.toLowerCase()))
		}
    	return (
      	<div className="App">
        		<header className="App__header">
         		<h1 className="App__title">Harry Potter Characters</h1>
					<img className="App__logo" src={ require('./images/glasses.svg')} alt="logo"/>
        		</header>
		  		<main>
		  			<input className="input" type="text" name="search" placeholder="Write a Harry Potter character" onChange={this.filter.bind(this)}/>
					<div>
						<ul className="characters-list"> {characters.map(character => <li key={character.name}>
						<HarryPoterList
						name={character.name}
						photo={character.image}
						house={character.house}
						alive={character.alive ? <img className="live" src={ require('./images/live.svg')} alt="is alive"/> : <img className="dead" src={ require('./images/dead.svg')} alt="is dead"/> } />
						</li>
						)}
						</ul>
					</div>
					<div className="information">
					<Houses howarts={characters.house}/>
					</div>
		  		</main>
				<footer className="footer">
				<a href="https://twitter.com/gavimena" className="footer__copyright" target="_blank"> @gavimena </a><p className="footer__copyright"> &copy;Copyrights 2018</p>
				</footer>
      	</div>
    	);
  	}
}

export default App;
