import { Link, useLocation, useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()
  
  const handleSingOut = () => {
    navigate("/")
  }

  const handleAddContact = () => {
    navigate("/add-new-contact")
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
              <h2>CRM App</h2>
            </Link>
            
           {location.pathname !== "/" &&
            <div>
              {location.pathname !== "/add-new-contact" && location.pathname !== "/home" &&
              <button
                onClick={handleAddContact}
              >
                Add New Contact
              </button>}
              
              <button
                onClick={handleSingOut}
              >
                Sing Out
              </button>
            </div>}
        </div>
    </header>
  )
}

export default Header