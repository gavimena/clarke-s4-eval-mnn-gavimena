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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
		  <main>
        	<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        	</p>
			<HarryPoterList />
		  </main>
      </div>
    );
  }
}

export default App;
