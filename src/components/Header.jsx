import { Link, useLocation, useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()
  
  const handleSingOut = () => {
    navigate("/")
  }
  
  /* useEffect(() => {
    console.log(location)
  }, []) */

  return (
    <header>
        <div>
            <Link
              to='/home'
            >
              <h2>CRM</h2>
            </Link>
            
           {location.pathname !== "/" &&
            <button
              onClick={handleSingOut}
            >
              Sing Out
            </button>}
        </div>
    </header>
  )
}

export default Header