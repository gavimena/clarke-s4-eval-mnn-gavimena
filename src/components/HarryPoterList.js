import React from 'react';

class HarryPoterList extends React.Component {
	render(){
		return(
			<div className="characters__container">
				<h3> {this.props.name} </h3>
				<div className="characters__photo" style={{backgroundImage: `url(${this.props.photo})`}}>
				</div>
				<div className="characters__icons">
					<img className={`characters__houses houses--${this.props.house}`}/>
					<p> {this.props.alive} </p>
				</div>
			</div>
		);
	}
}

export default HarryPoterList;
