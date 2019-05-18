import {Api} from '../api';

const api = new Api();

export function CharacterAction(type,payload){
    return (dispatch) => {
        dispatch({
            type:'characterListLoading',
            payload:null
        });

        api.characterList().then(
            response=>{
                dispatch({
                    type:'characterListReady',
                    payload:response.results
                })
            }
        );
    }
}