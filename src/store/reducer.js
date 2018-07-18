import * as actionCreators from './actionCreators';

const initialState = {
    shows: []
}

const showReducer = (state = initialState, action) => {
    switch(action.type){
        case actionCreators.STORE_DATA: {
            return {
                ...state.shows,
                shows: action.shows.map(show => {
                    show.showId = Math.floor(Math.random() * 100) + 55;
                    return show;
                })
            };
        }
        default: 
            return state;
    }
}

export default showReducer;