import React from 'react';

class Houses extends React.Component {
	render() {
		if(`${this.props.house}` === 'Howarts') {

		}
		return(
			<div>
				<h1>Howarts</h1>
				<ul>
					<li>
					{this.props.howarts}
					</li>
				</ul>
			</div>
		);
	}
}

export default Houses;
