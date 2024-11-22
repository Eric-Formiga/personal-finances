import { User } from "../@types/Auth"
import { useAppDispatch } from "../redux/hooks"
import { setAuthStatus, setAuthToken, setUser } from "../redux/slices/authSlice"
import { getUser, signIn, signUp } from "../services/requests"

const LOCAL_STORAGE_KEY = import.meta.env.VITE_LOCAL_STORAGE_AUTH_KEY

export const useAuth = () =>{
  const dispatch = useAppDispatch()

  //Function to authenticate the user
  const authenticate = (user: User, authToken: string) => {
    dispatch(setUser(user))
    dispatch(setAuthToken(authToken))
    dispatch(setAuthStatus('authenticated'))

    localStorage.setItem(LOCAL_STORAGE_KEY, authToken)
  }

  // get token from local storage
  const handleGetToken = () => localStorage.getItem(LOCAL_STORAGE_KEY)

  // get user using the auth token saved in local storage
  const handleAuthenticateUser = async () => {
    const request = await getUser()
    const authToken = handleGetToken()

    if(!request.data || !authToken){
      dispatch(setAuthStatus('not_authenticated'))
      return;
    }

    const {data} = request;
    authenticate(data.user, authToken)
  }

  //function to sign in 
  const handleSignIn = async ({email, password}: {email: string, password: string}) => {
    const request = await signIn(email,password)

    if(request.data){
      const {data} = request

      authenticate(data.user, data.authToken);
      return true;
    }

    dispatch(setAuthStatus('not_authenticated'))
    return request.error
  }

  const handleSignUp = async ({name, email, password}: {name: string, email: string, password: string}) => {
    const request = await signUp(name,email,password)

    if(request.data){
      const {data} = request

      authenticate(data.user, data.authToken);
      return true;
    }

    dispatch(setAuthStatus('not_authenticated'))
    return request.error
  }

  //function to singOut
  const handleSignOut = ()=> {
    dispatch(setUser(null))
    dispatch(setAuthToken(null))
    dispatch(setAuthStatus('not_authenticated'))

    localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  return{
    handleGetToken,
    handleAuthenticateUser,
    handleSignIn,
    handleSignUp,
    handleSignOut
  }
}