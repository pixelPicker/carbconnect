import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const navigate = useNavigate()

export default ProtectedRoute= () => {
  const {user} = useSelector((state) => state.auth);

  return user ? <Outlet /> : navigate('/signin')
}