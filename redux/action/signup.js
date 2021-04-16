import { SIGNUP_FAIL, SIGNUP_SUCCESS } from './type'
import { Signup } from '../../constant/apiUrl'

export function UserSignup() {
    return async (dispatch) => {
        fetch(Signup, {
            method: 'POST',
            headers: {
                'x-api-key': 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj',
                'Content-Type': 'application/json'
            },
            body: {
                "name": "Janishar Ali",
                "email": "ali@mindorks.com",
                "password": "changeit",
                "profilePicUrl": "https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
                dispatch({
                    type: SIGNUP_FAIL,
                    payload: error
                })
            });
    }
}