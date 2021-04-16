import { GET_PAGE_LIST } from './type'

export function getPageList() {
    console.log("getPageList")
    return async (dispatch) => {
        fetch('https://api.imgflip.com/get_memes', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                dispatch({
                    type: GET_PAGE_LIST,
                    payload: responseJson.data.memes
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}