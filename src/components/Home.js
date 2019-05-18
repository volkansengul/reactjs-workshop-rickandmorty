import React from 'react';
import {Api} from '../api';

import CharacterCard from './CharacterCard';

import './Home.css';

export default class Home extends React.Component {

    constructor(){
        super();
        this.api = new Api();
        this.state = {
            characterList: []
        }
    }

    componentDidMount(){
        this.api.characterList().then(
            response=>{
                console.log(response);
                this.setState({
                    characterList: response.results
                })
            }
        );
    }

    render(){

        const characterList = this.state.characterList
            .map(item=>{
                return <CharacterCard key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                />
            })
        return (
            <>
                <div className={'character-list'}>{characterList}</div>
            </>
        )
    }
}