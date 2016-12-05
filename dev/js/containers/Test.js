import React, {Component} from 'react';

class Test extends Component {
	constructor(){
		super();
		this.state = {
			content : '<line className="animate_last red-line"  x1="10.8%" y1="11.5%" x2="10.8%" y2="6.5%"  />'
				+ '<line className="animate_fifth red-line" x1="31.5%" y1="11.5%" x2="10.8%" y2="11.5%"  />'
				+ '<line className="animate_fourth red-line" x1="31.5%" y1="57.5%" x2="31.5%" y2="11.5%" />'
				+ '<line className="animate_third red-line" x1="68%" y1="57.5%" x2="31.5%" y2="57.5%"  />'
				+ '<line className="animate_second red-line" x1="68%" y1="74.5%" x2="68%" y2="57.5%"  />'
				+ '<line className="animate_first red-line" x1="73%" y1="74.5%" x2="68%" y2="74.5%"  />'
				+ '<circle cx="10.8%" cy="6.2%" r="0.3%" fill="red" />'
		}
	}
	render(){
		return(
			<svg>
				{this.state.content}
			</svg>
		)
	}
}

export default Test;