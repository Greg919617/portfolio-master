import React, {Component} from 'react';
import picture from '../pictures/greg_headshot.JPG';

class Headshot extends Component {
    
    render() {
        return (
            <img id={this.props.id} src={picture} alt="Greg" />
        )
    }
} 

export default Headshot;