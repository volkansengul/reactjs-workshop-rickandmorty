import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {BasketAction} from '../actions/BasketAction';

class CharacterCard extends React.Component {
    render(){
        return(
            <div className={'card'}>
                <Link to={'/detail/'+this.props.id}>
                <img src={this.props.image}/>
                <h3>{this.props.name}</h3>
                </Link>
                <button onClick={(e)=>{this.props.basketAction('Add',
                    {
                        id: this.props.id,
                        name: this.props.name,
                        image: this.props.image,
                        price: 100
                    })}}>SEPETE EKLE</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        basketState: state.basket
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        basketAction: BasketAction
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CharacterCard);