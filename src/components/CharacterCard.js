import React from 'react';
import {Link} from 'react-router-dom';

export default class CharacterCard extends React.Component {
    render(){
        return(
            <Link to={'/detail/'+this.props.id}>
            <div>
                <img src={this.props.image}/>
                <h3>{this.props.name}</h3>
            </div>
            </Link>
        )
    }
}