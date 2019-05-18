const initialState = {
    status: 'ready',
    list: []
};

export default function CharacterReducer(state=initialState, action){

    switch (action.type){
        case 'characterListLoading':
            return {
                ...state,
                status: 'pending'
            }
        case 'characterListReady':
            return {
                ...state,
                status:'ready',
                list: action.payload
            }
        default:
            return state;
            break;
    }
}