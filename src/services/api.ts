import axios,{AxiosError} from "axios";

type Props ={
  endpoint: string,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: object,
  withAuth?: boolean
}

export const api = async <TypeResponse> ({
  endpoint,
  method = 'GET',
  data,
  withAuth = true
}:Props)=>{
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
  })

  if(withAuth) {
    instance.defaults.headers.common['Authorization'] = localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_AUTH_KEY)
  }

  try {
    const request = await instance<TypeResponse>(endpoint,{
      method,
      params: method == 'GET' && data,
      data: method != 'GET' && data
    })

    return{
      data: request.data
    }
  } catch (error) {
    
    const e = error as AxiosError<{message:string}>

    return{
      error: e.response?.data.message ?? e.message
    }
  }

}