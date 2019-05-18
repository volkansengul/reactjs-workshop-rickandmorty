const initialState = {
    basketList: []
};

export default function BasketReducer(state=initialState, action){

    switch (action.type){
        case 'Add':
            return {
                ...state,
                basketList:action.payload
            }
        default:
            return state;
            break;
    }
}