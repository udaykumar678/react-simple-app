import service from '../services/SimpleService';
export const STORE_DATA = 'STORE_DATA';


export const getShows = () => {
    return dispatch => {
        service.getShows().then(resp => {
            dispatch({type: STORE_DATA, shows: resp.data});
        }).catch(err => {
            console.log('Error in getting Show Details');
        });
    }
}