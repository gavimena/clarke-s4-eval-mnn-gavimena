import React from 'react';

class HarryPoterList extends React.Component {
	render(){
		return(
			<div className="container-characters">
				<h3> {this.props.name} </h3>
				<div>
					<img className="photo" src={this.props.photo} alt="Harry Potter character"/>
				</div>
				<div className="icons">
					<img className={`houses houses--${this.props.house}`} />
					<p> {this.props.alive} </p>
				</div>
			</div>
		);
	}
}

export default HarryPoterList;
