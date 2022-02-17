import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async(dispatch, user) => {
  dispatch(loginStart());

  try{
    const res = await publicRequest.post('/auth/login', {username:user.username, password:user.password});
    dispatch(loginSuccess(res.data))

  } catch (error) {
    console.log(error);
    dispatch(loginFailure())
  }


}