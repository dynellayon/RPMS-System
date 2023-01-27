import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
  let auth = {'token': false}
  let user=JSON.parse(sessionStorage.getItem('user-info'));
  if(user){
    auth = {'token':true}
    
  }
return (
    auth.token
    ? <Outlet/> : <Navigate to='/'/>
  )
}
export default PrivateRoutes;