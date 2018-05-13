import React, {Component} from 'react';


class Bio extends Component {
    
        
        render() {
            return (
                <div 
                    id={this.props.id} 
                        data-aos="fade-up" 
                        data-aos-duration={this.props.duration}
                >

                <p>I'm a Innovator who builds digital products. 
                I enjoy working with individuals who thrive on innovation, 
                and value social impact.</p>

    <p>With that in mind, I began my technical profession with LaunchCode 6 month bootcamp. 
    The class was an aggregate of Python/Flask and ReactJS/Node. </p>
    
    <p>After I graduated, I started traveling accross the U.S to participate 
    in Startup Weekend Events in Silicon Valley, Boston, & Kansas City. 
    The experience and thoughts taken away from these events have been invaluable.
    </p>

                  
                   
                    
                
                  
                    <p>
                        Currently I am looking for a team which values positive company culture, and is invested in the success of 
                        their colleagues.  If that sounds like your organization, please contact me using the form below.
                    </p>    
                </div>
            )
        }
    } 
    
    export default Bio;