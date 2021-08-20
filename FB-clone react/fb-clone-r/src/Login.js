import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionType } from './reducer'
function Login() {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        //login
        auth.signInWithPopup(provider).then(
            (result) => {
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user
                })
            }
        )
            .catch((error) => { alert(error.message) })
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""
                />
                <img src="https://png.pngtree.com/png-vector/20190723/ourlarge/pngtree-facebook-name-with-back-shadow-png-image_17391.jpg" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login
