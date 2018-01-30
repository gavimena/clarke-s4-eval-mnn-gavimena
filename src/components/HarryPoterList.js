import React from 'react';

class HarryPoterList extends React.Component {
	render(){
		return(
			<div className="container-characters">
				<h3> {this.props.name} </h3>
				<img className="photo" src={this.props.photo} alt="Harry Potter character"/>
				<h4> {this.props.house} </h4>
				<p> {this.props.alive} </p>
			</div>
		);
	}
}

export default HarryPoterList;
