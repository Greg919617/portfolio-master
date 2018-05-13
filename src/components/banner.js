import { Grid, Menu, Segment } from 'semantic-ui-react'
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// import ggBridge from '../pictures/chess.jpg';

//class Banner extends Component {
//     render(){
//         let content;

//         if(this.props.windowWidth > 800){
//             content = <img src={ggBridge} id="banner-img" alt="gg bridge at dusk"/>
//         }
//         return (
//             <div id={this.props.id}>
//                 {content}
//             </div>
//         )
//     }
// }

// export default Banner;






class MenuSticky extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing vertical>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default MenuSticky;