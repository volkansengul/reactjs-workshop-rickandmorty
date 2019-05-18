const initialState = {
    list: []
};

export default function BasketReducer(state=initialState, action){

    switch (action.type){
        case 'Add':
            let updatedList = state.list;
            updatedList.push(action.payload);
            return {
                ...state,
                list: updatedList
            }
        default:
            return state;
            break;
    }
}