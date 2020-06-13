import React from 'react';
import Typography from '@material-ui/core/Typography';
import './style.css'

class DigitalClock extends React.Component {

    constructor() {
        super();
        this.state = { time: new Date() }; // initialise the state
    }

    componentDidMount() { // create the interval once component is mounted
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); // every 1 seconds
    }

    componentWillUnmount() { // delete the interval just before component is removed
        clearInterval(this.update);
    }

    render() {
        const { time } = this.state; // retrieve the time from state

        return (
            <div className="timer">   
                <Typography variant="h5" component="h2" className="font">
                    {time.toLocaleDateString()}
                </Typography>
                <Typography variant="h2" component="h2" className="font">
                    {time.toLocaleTimeString()}
                </Typography>
            </div>
        );
    }
}

export default DigitalClock;