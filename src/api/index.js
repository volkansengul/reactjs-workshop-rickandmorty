export class Api {

    constructor(){
        this.apiUrl = 'https://rickandmortyapi.com/api/';
    }

    callApi = async (endPoint) => {
        return await(fetch(endPoint).then(
            response => response.json()
        )).catch(errors => {
            return {errors: errors}
        })
    }

    characterList(endPoint='character'){
        return this.callApi(this.apiUrl+endPoint);
    }

    character(endPoint='character',characterId){
        return this.callApi(this.apiUrl+endPoint+'/'+characterId);
    }
}