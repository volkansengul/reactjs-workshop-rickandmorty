import React from 'react';
import {Api} from "../api";
import CharacterCard from "./CharacterCard";

export default class Detail extends React.Component {

    constructor(){
        super();
        this.api = new Api();
        this.state = {
            characterData: {
                id:0,
                name:null,
                image:null
            }
        }
    }

    componentDidMount(){
        this.api.character('character',
            this.props.match.params.myId).then(
            response=>{
                console.log(response);
                this.setState({
                    characterData: response
                })
            }
        );
    }

    render(){
        const {id, name, image } = this.state.characterData;
        return (
            <>
                <CharacterCard
                               id={id}
                               name={name}
                               image={image}
                />
            </>
        )
    }
}