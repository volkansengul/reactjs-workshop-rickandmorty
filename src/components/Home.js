import React from 'react';
import {Api} from '../api';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import CharacterCard from './CharacterCard';

import './Home.css';
import {CharacterAction} from "../actions/characterAction";

class Home extends React.Component {

    constructor(){
        super();
        this.api = new Api();
        this.state = {
            characterList: []
        }
    }

    componentDidMount(){

        this.props.characterAction(null,null);


    }

    render(){
        const basketCount = this.props.basketState.list.length;
        const isLoading = (this.props.characterState.status==='pending')?
            'Loading...':null
        const characterList = this.props.characterState.list
            .map(item=>{
                return <CharacterCard key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                />
            })
        return (
            <>
                {isLoading}
                <hr />
                {basketCount}
                <hr />
                <div className={'character-list'}>{characterList}</div>
            </>
        )
    }
}

function mapStateToProps(state){
    return {
        characterState: state.character,
        basketState: state.basket
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        characterAction: CharacterAction
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);