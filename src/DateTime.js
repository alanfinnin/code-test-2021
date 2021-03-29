import React from 'react';

class DateTime extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  time: new Date().toLocaleString()
		};
	}
	componentDidMount() {
		this.intervalID = setInterval(
		  () => this.tick(),
		  1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	tick() {
		this.setState({
			time: new Date().toLocaleString()
		});
	}
	render() {
    return (
      <h1 className="DateTime">
        {this.state.time}
      </h1>
    );
	
  }
}
export default DateTime;